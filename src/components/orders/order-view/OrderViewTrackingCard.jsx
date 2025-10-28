import { useEffect, useState, useMemo } from "react";
import { updateOrderStatus } from "../../../api";
import { dateFormatter, errorNotification, successNotification } from "../../../utils/helpers";

const STEPS = [
  { status: "ware_housed", title: "Order Received at warehouse" },
  { status: "shipping", title: "Order Out for Delivery" },
  { status: "delivered", title: "Order Delivered to Customer" },
];

const ACTION_TITLES = {
  in_transit: "Confirm receipt",
  ware_housed: "Mark as out for delivery",
  shipping: "Confirm delivery",
  delivered: "Delivered!",
};

const HIDDEN_STATUSES = ["pending", "out_for_delivery"];

const CurrentAction = ({ visible, onAction, title }) => {
  if (!visible) return null;
  return (
    <button
      onClick={onAction}
      className="mt-2 bg-black text-white text-xs px-3 py-1 rounded-sm hover:bg-gray-800 transition"
    >
      {title}
    </button>
  );
};

const OrderViewTracking = ({ order, mutate }) => {
  const [currentStatus, setCurrentStatus] = useState(order?.status || "");
  const [timestamps, setTimestamps] = useState(order?.timestamps || {});
  const [showTimeline, setShowTimeline] = useState(true);

  useEffect(() => {
    setShowTimeline(!HIDDEN_STATUSES.includes(order?.status));
  }, [order?.status]);

  useEffect(() => {
    if (order?.status) setCurrentStatus(order.status);
    if (order?.timestamps) setTimestamps(order.timestamps);
  }, [order]);

  const currentIndex = useMemo(
    () => STEPS.findIndex((step) => step.status === currentStatus),
    [currentStatus]
  );

  const handleUpdateOrderStatus = async (newStatus, orderId) => {
    const now = new Date().toISOString();
    const updatedTimestamps = {
      ...timestamps,
      [newStatus]: now,
    };

    try {
      const response = await updateOrderStatus(
        { status: newStatus, timestamps: updatedTimestamps },
        orderId
      );

      if (response?.status?.toString()?.startsWith("20")) {
        successNotification("Order status updated");
        setTimestamps(updatedTimestamps);
        mutate?.();
      } else {
        errorNotification("Update failed");
      }
    } catch {
      errorNotification("Failed to update order status");
    }
  };

  const handleAction = async () => {
    const nextStep = STEPS[currentIndex + 1];
    if (!nextStep) return;
    setCurrentStatus(nextStep.status);
    await handleUpdateOrderStatus({ status: nextStep.status }, order?._id);
  };

  const currentStep = STEPS[currentIndex];
  const actionTitle = ACTION_TITLES[currentStep?.status];
  const showAction = !!actionTitle && currentIndex < STEPS.length - 1;

  if (!showTimeline) return null;

  return (
    <div className="border-2 p-5 w-full lg:w-1/2 relative">
      <div className="flex justify-between mb-3 font-semibold">
        Order Timeline
      </div>
      <div className="bg-white py-4 text-md">
        <div className="relative">
          <div className="absolute left-[8px] top-2 bottom-2 w-[2px] bg-gray-400/50" />
          <div className="flex flex-col space-y-6">
              {STEPS.map((step, index) => {
              const isActive = index <= currentIndex;
              const isLast = index === STEPS.length - 1;
              const stepDate = dateFormatter(timestamps[step.status] || "2025-07-25T09:30:00Z");
          
              return (
                  <div key={step.status} className="relative flex items-start">
                  {/* Circle */}
                  <div className="flex flex-col items-center">
                      <div
                      className={`w-4 h-4 rounded-full border-2 ${
                          isActive ? "border-black bg-black" : "border-gray-400 bg-white"
                      }`}
                      />
                      {!isLast && (
                      <div className="flex-1 w-[2px] bg-gray-200 mt-1"></div>
                      )}
                  </div>
                  
                  {/* Step content */}
                  <div className="ml-4 w-full">
                      <div className="font-medium text-black flex justify-between w-full">
                        <div>{step.title}</div>
                        {stepDate && (
                          <div className="text-xs text-gray-600 mt-1">{stepDate}</div>
                        )}
                      </div>  
                      {index === currentIndex && (
                      <CurrentAction
                          visible={showAction}
                          onAction={handleAction}
                          title={actionTitle}
                      />
                      )}
                  </div>
                  </div>
              );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewTracking;