const StatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "active":
      bg = "bg-green-500 text-white";
      break;
    case "isActive":
      bg = "bg-green-500 text-white";
      break;
    case "resolved":
      bg = "bg-green-500 text-white";
      break;
    case "approved":
      bg = "bg-green-500 text-white";
      break;
    case "delivered":
      bg = "bg-green-500 text-white";
      break;
    case "paid":
      bg = "bg-green-500 text-white";
      break;
    case "completed":
      bg = "bg-green-500 text-white";
      break;
    case "low":
      bg = "bg-green-500 text-white";
      break;
    case "open":
      bg = "bg-blue-600 text-white";
      break;
    case "pending":
      bg = "bg-amber-500 text-black";
      break;
    case "pending approval":
      bg = "bg-amber-500 text-black";
      break;
    case "awaiting confirmation":
      bg = "bg-amber-500 text-black";
      break;
    case "awaiting approval":
      bg = "bg-amber-500 text-black";
      break;
    case "in review":
      bg = "bg-amber-500 text-black";
      break;
    case "medium":
      bg = "bg-amber-500 text-black";
      break;
    case "inactive":
      bg = "bg-red-600 text-white";
      break;
    case "rejected":
      bg = "bg-red-600 text-white";
      break;
    case "unavailable":
      bg = "bg-red-600 text-white";
      break;
    case "failed":
      bg = "bg-red-600 text-white";
      break;
    case "hold":
      bg = "bg-red-600 text-white";
      break;
    case "high":
      bg = "bg-red-600 text-white";
      break;
    default:
      bg = "";
  }

  return <span className={`${bg} ${className}`}>{value}</span>;
};

export default StatusCheck;
