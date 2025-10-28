// import { useEffect, useState } from "react";
// import { updateOrderStatus } from "../../../api";
// import { errorNotification, successNotification } from "../../../utils/helpers";

// const OrderViewTimelineCard = ({ order, mutate }) => {
//   const statusToStep = {
//     in_transit: 1,
//     ware_housed: 2,
//     out_for_delivery: 3,
//     delivered: 4,
//   };

//   const stepToStatus = {
//     2: "ware_housed",
//     3: "out_for_delivery",
//     4: "delivered",
//   };

//   const [currentStep, setCurrentStep] = useState(statusToStep[order?.status] || 0);

//   useEffect(() => {
//     if (order?.status) {
//       setCurrentStep(statusToStep[order.status]);
//     }
//   }, [order?.status]);

//   const steps = [
//     { title: "Order received", date: "July 15, 2025" },
//     { title: "In transit to warehouse", date: "July 15, 2025" },
//     { title: "Received at warehouse", date: "July 16, 2025" },
//     { title: "Out for Delivery", date: "July 16, 2025" },
//     { title: "Delivered to Customer", date: "July 25, 2025" },
//   ];

//   const handleUpdateOrderStatus = async (values, orderId) => {
//     try {
//       const response = await updateOrderStatus(values, orderId);
//       if (response?.status?.toString()?.includes("20")) {
//         successNotification(response?.data?.message);
//         mutate?.();
//       } else {
//         errorNotification(response?.data?.message[0]);
//       }
//     } catch (err) {
//       errorNotification("Failed to update order status");
//     }
//   };

//   const handleAction = async (index) => {
//     if (index < steps.length - 1) {
//       const nextStep = index + 1;
//       setCurrentStep(nextStep);
//       const newStatus = stepToStatus[nextStep];
//       if (newStatus) {
//         await handleUpdateOrderStatus({ status: newStatus }, order?._id);
//       }
//     }
//   };

//   const getActionTitle = (index) => {
//     if (index === 1) return "Confirm receipt";
//     if (index === 2) return "Mark as out for delivery";
//     if (index === 3) return "Confirm delivery";
//     if (index === 4) return "Delivered!";
//     return null;
//   };

//   return (
//     <div className="bg-yellow-100 p-6 rounded-md">
//       <div className="flex items-center justify-between relative">
//         {/* Progress line */}
//         <div className="absolute top-2 left-0 right-0 h-[2px] bg-white z-0" />
//         <div
//           className="absolute top-2 left-0 h-[2px] bg-black z-10 transition-all duration-500"
//           style={{
//             width: `${(currentStep / (steps.length - 1)) * 100}%`,
//           }}
//         />

//         {/* Steps */}
//         {steps.map((step, index) => {
//           const actionTitle = getActionTitle(index);
//           const showAction = index === currentStep && !!actionTitle;

//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center w-1/5 relative z-20"
//             >
//               <div
//                 className={`w-5 h-5 rounded-full border-2 ${
//                   index <= currentStep
//                     ? "border-black bg-black"
//                     : "border-black bg-white"
//                 }`}
//               />
//               <div className="flex flex-col items-center mt-3 min-h-[80px]">
//                 <div className="text-sm font-medium text-black">
//                   {step.title}
//                 </div>
//                 {step.date && (
//                   <div className="text-xs text-gray-600 mt-1">{step.date}</div>
//                 )}
//                 <CurrentAction
//                   action={showAction}
//                   onAction={() => handleAction(index)}
//                   title={actionTitle}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const CurrentAction = ({ action, onAction, title }) => {
//   if (!action) return null;
//   return (
//     <button
//       onClick={onAction}
//       className="mt-3 bg-black text-white text-sm px-4 py-1 rounded-sm hover:bg-gray-800 transition"
//     >
//       {title}
//     </button>
//   );
// };

// export default OrderViewTimelineCard;



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
  in_transit: "Confirm receipt",
  ware_housed: "Mark as out for delivery",
  out_for_delivery: "Confirm delivery",
  delivered: "Delivered!",
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
          const stepDate = dateFormatter(timestamps[step.status] || "2025-07-25T09:30:00Z");

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
                  {/* {stepDate && (
                    <div className="text-xs text-gray-600 mt-1">{stepDate}</div>
                  )} */}
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




//   return (
//     <div className="bg-yellow-100 p-6 rounded-md">
//       <div className="relative flex items-start justify-between flex-col pl-6 border-l-2 border-black space-y-8">
//         {STEPS.map((step, index) => {
//           const isActive = index <= currentIndex;
//           const stepDate = dateFormatter(timestamps[step.status] || "2025-07-25T09:30:00Z");

//           return (
//             <div key={step.status} className="relative">
//               <div
//                 className={`absolute -left-[11px] w-5 h-5 rounded-full border-2 ${
//                   isActive ? "bg-black border-black" : "bg-white border-black"
//                 }`}
//               />
//               <div className="ml-6">
//                 <div className="font-medium text-black text-sm">{step.title}</div>
//                 {stepDate && (
//                   <div className="text-xs text-gray-600 mt-1">{stepDate}</div>
//                 )}
//                 {index === currentIndex && (
//                   <CurrentAction
//                     visible={showAction}
//                     onAction={handleAction}
//                     title={actionTitle}
//                   />
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OrderViewTimelineCard;
