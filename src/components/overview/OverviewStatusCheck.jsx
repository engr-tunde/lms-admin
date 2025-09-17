
const StatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "delivered":
      bg = "bg-green-500 text-white";
      break;
    case "pending":
      bg = "bg-yellow-500 text-black";
      break;
    case "failed":
      bg = "bg-red-500 text-white";
      break;
    default:
      bg = "";
  }

  return (
    <span className={`${bg} ${className}`}>
      {value}
    </span>
  );
};

export default StatusCheck;
