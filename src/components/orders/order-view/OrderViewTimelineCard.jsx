import { useState } from "react";

const OrderViewTimelineCard = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { title: "Order received", date: "July 15, 2025" },
    { title: "In transit to warehouse", date: "July 15, 2025" },
    { title: "Received at warehouse", date: "July 16, 2025" },
    { title: "Out for Delivery" },
    { title: "Delivered to Customer", date: "July 25, 2025" },
  ];

  const handleAction = (index) => {
    if (index < steps.length - 1) {
      setCurrentStep(index + 1);
    }
  };

  const getActionTitle = (index) => {
    if (index === 2) return "Confirm receipt";
    if (index === 3) return "Mark as out for delivery";
    return null;
  };

  return (
    <div className="bg-yellow-100 p-6 rounded-md">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-2 left-0 right-0 h-[2px] bg-white z-0" />
        <div
          className="absolute top-2 left-0 h-[2px] bg-black z-10 transition-all duration-500"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const actionTitle = getActionTitle(index);
          const showAction = index === currentStep && !!actionTitle;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center w-1/5 relative z-20"
            >
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  index <= currentStep
                    ? "border-black bg-black"
                    : "border-black bg-white"
                }`}
              />
              <div className="flex flex-col items-center mt-3 min-h-[80px]">
                <div className="text-sm font-medium text-black">
                  {step.title}
                </div>
                {step.date && (
                  <div className="text-xs text-gray-600 mt-1">
                    {step.date}
                  </div>
                )}
                <CurrentAction
                  action={showAction}
                  onAction={() => handleAction(index)}
                  title={actionTitle}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CurrentAction = ({ action, onAction, title }) => {
  if (!action) return null;

  return (
    <button
      onClick={onAction}
      className="mt-3 bg-black text-white text-sm px-4 py-1 rounded-sm hover:bg-gray-800 transition"
    >
      {title}
    </button>
  );
};

export default OrderViewTimelineCard;
