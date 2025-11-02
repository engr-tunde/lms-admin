import { useEffect, useState, useMemo } from "react";
import { updateOrderStatus } from "../../../api";
import { dateFormatter, errorNotification, successNotification } from "../../../utils/helpers";

const STEPS = [
  { status: "order_received", title: "Order received",},
  { status: "in_transit", title: "In transit to warehouse",},
  { status: "ware_housed", title: "Received at warehouse",},
  { status: "out_for_delivery", title: "Out for Delivery",},
  { status: "delivered", title: "Delivered to Customer",},
];

const ACTION_TITLES = {
  ware_housed: "Confirm receipt",
  out_for_delivery: "Mark as out for delivery",
  delivered: "Confirm delivery",
};

const CurrentAction = ({ visible, onAction, title }) => {
  if (!visible) return null;
  return (
    <button
      onClick={onAction}
      className="mt-3 bg-black text-white text-sm px-4 py-1 rounded-sm hover:bg-gray-800 transition"
    >
      {title}
    </button>
  );
};

const OrderViewTimelineCard = ({ order, mutate }) => {
  const [currentStatus, setCurrentStatus] = useState(order?.status || "");
  const [timestamps, setTimestamps] = useState(order?.timestamps || {});

  useEffect(() => {
    if (order?.status) setCurrentStatus(order.status);
    if (order?.timestamps) setTimestamps(order.timestamps);
  }, [order]);

  const currentIndex = useMemo(
    () => STEPS.findIndex((step) => step.status === currentStatus),
    [currentStatus]
  );

  const progressWidth = useMemo(
    () => `${(currentIndex / (STEPS.length - 1)) * 100}%`,
    [currentIndex]
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
    await handleUpdateOrderStatus(nextStep.status, order?._id);
  };

  const currentStep = STEPS[currentIndex];
  const actionTitle = ACTION_TITLES[currentStep?.status];
  const showAction = !!actionTitle && currentIndex < STEPS.length - 1;

  return (
    <div className="hidden md:block bg-yellow-100 p-6 rounded-md">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-2 left-0 right-0 h-[2px] bg-white z-0" />
        <div
          className="absolute top-2 left-0 h-[2px] bg-black z-10 transition-all duration-500"
          style={{ width: progressWidth }}
        />

        {/* Steps */}
        {STEPS.map((step, index) => {
          const isActive = index <= currentIndex;
          const stepDate =  
            timestamps[step.status] ? 
            dateFormatter(timestamps[step.status]) : null;

          return (
            <div
              key={step.status}
              className="flex flex-col items-center text-center w-1/5 relative z-20"
            >
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  isActive ? "border-black bg-black" : "border-black bg-white"
                }`}
              />
              <div className="flex flex-col items-center mt-3 min-h-[80px]">
                <div className="text-sm font-medium text-black">
                  {step.title}
                </div>
                {stepDate && (
                  <div className="text-xs text-gray-600 mt-1">{stepDate}</div>
                )}
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
  );
};

export default OrderViewTimelineCard;