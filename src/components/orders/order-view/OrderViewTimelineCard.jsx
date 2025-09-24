

// const OrderViewTimelineCard = ({ steps }) => {
//   return (
//     <div className="bg-yellow-100 p-4">
//       <div className="flex justify-between items-start relative">
//         <div className="absolute top-5 left-0 right-0 h-0.5 bg-black/20"></div>

//         {steps.map((step, index) => {
//           const isCompleted = step.status === "completed";
//           const isActive = step.status === "active";

//           return (
//             <div key={index} className="flex flex-col items-center w-full text-center relative">
//               {/* Step circle */}
//               <div
//                 className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-white z-10
//                 ${isCompleted ? "bg-black text-white" : ""}
//                 ${isActive ? "ring-2 ring-black" : ""}`}
//               >
//                 {isCompleted && <div className="w-2 h-2 rounded-full bg-white"></div>}
//               </div>

//               {/* Step label */}
//               <p className="mt-2 text-sm font-medium">{step.label}</p>

//               {/* Step date */}
//               {step.date && (
//                 <p className="text-xs text-gray-700 mt-1">{step.date}</p>
//               )}

//               {/* Step action (only show for active steps that have actions) */}
//               {isActive && step.action && (
//                 <button
//                   onClick={step.action.onClick}
//                   className="mt-2 bg-black text-white text-xs px-3 py-1 rounded"
//                 >
//                   {step.action.label}
//                 </button>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OrderViewTimelineCard;





// import React from 'react';
// const OrderTrackingWidget = ({ 
//   steps = [],
//   currentStep = 0,
//   actionButton = null,
//   variant = 'default' // 'default', 'compact', or 'minimal'
// }) => {
//   const getStepStatus = (index) => {
//     if (index < currentStep) return 'completed';
//     if (index === currentStep) return 'current';
//     return 'pending';
//   };

//   const renderConnector = (index) => {
//     if (index === steps.length - 1) return null;
    
//     const isCompleted = index < currentStep;
//     return (
//       <div className={`flex-1 h-0.5 ${
//         isCompleted ? 'bg-red-800' : 'bg-gray-300'
//       }`} />
//     );
//   };

//   const renderStep = (step, index) => {
//     const status = getStepStatus(index);
    
//     return (
//       <div key={index} className="flex flex-col items-center relative">
//         {/* Step Circle */}
//         <div className={`w-4 h-4 rounded-full border-2 z-10 ${
//           status === 'completed' 
//             ? 'bg-gray-800 border-gray-800' 
//             : status === 'current'
//             ? 'bg-white border-gray-800'
//             : 'bg-white border-gray-300'
//         }`} />
        
//         {/* Step Label and Date */}
//         <div className="mt-3 text-center min-w-0">
//           <div className={`text-sm font-medium ${
//             status === 'pending' ? 'text-gray-400' : 'text-gray-800'
//           }`}>
//             {step.label}
//           </div>
//           {step.date && (
//             <div className={`text-xs mt-1 ${
//               status === 'pending' ? 'text-gray-300' : 'text-gray-600'
//             }`}>
//               {step.date}
//             </div>
//           )}
//           {step.time && (
//             <div className={`text-xs ${
//               status === 'pending' ? 'text-gray-300' : 'text-gray-600'
//             }`}>
//               {step.time}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-yellow-100 border border-blue-400 rounded-lg p-6 max-w-4xl mx-auto">
//       {/* Progress Line and Steps */}
//       <div className="flex items-start justify-between mb-4">
//         {steps.map((step, index) => (
//           <React.Fragment key={index}>
//             {renderStep(step, index)}
//             {renderConnector(index)}
//           </React.Fragment>
//         ))}
//       </div>
      
//       {/* Action Button */}
//       {actionButton && (
//         <div className="flex justify-center mt-6">
//           <button 
//             className="bg-black text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
//             onClick={actionButton.onClick}
//           >
//             {actionButton.text}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Demo with all three variations
// const OrderTrackingDemo = () => {
//   const baseSteps = [
//     { label: 'Order received at warehouse', date: 'July 15, 2025' },
//     { label: 'Out for delivery', date: '' },
//     { label: 'Delivered to Customer', date: '' }
//   ];

//   const detailedSteps = [
//     { label: 'Order received', date: 'July 15, 2025' },
//     { label: 'In transit to warehouse', date: 'July 15, 2025' },
//     { label: 'Received at warehouse', date: 'July 25, 2025', time: '10:50 AM' },
//     { label: 'Out for Delivery', date: 'July 25, 2025', time: '03:50 PM' },
//     { label: 'Delivered to Customer', date: '' }
//   ];

//   const transitSteps = [
//     { label: 'Order received', date: 'July 15, 2025' },
//     { label: 'In transit to warehouse', date: 'July 15, 2025' },
//     { label: 'Received at warehouse', date: '' },
//     { label: 'Out for Delivery', date: '' },
//     { label: 'Delivered to Customer', date: '' }
//   ];

//   return (
//     <div className="space-y-8 p-4">
//       <div>
//         <h3 className="text-lg font-semibold mb-4">Variation 1: Awaiting Delivery</h3>
//         <OrderTrackingWidget 
//           steps={baseSteps}
//           currentStep={0}
//           actionButton={{
//             text: 'Mark as out for delivery',
//             onClick: () => alert('Marked as out for delivery!')
//           }}
//         />
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold mb-4">Variation 2: Out for Delivery</h3>
//         <OrderTrackingWidget 
//           steps={detailedSteps}
//           currentStep={3}
//         />
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold mb-4">Variation 3: In Transit</h3>
//         <OrderTrackingWidget 
//           steps={transitSteps}
//           currentStep={1}
//           actionButton={{
//             text: 'Confirm receipt',
//             onClick: () => alert('Receipt confirmed!')
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default OrderTrackingDemo;


