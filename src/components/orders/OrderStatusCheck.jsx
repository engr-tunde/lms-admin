
const OrderStatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "active":
      bg = "bg-green-500 text-white";
      break;
    case "awaiting confirmation":
      bg = "bg-yellow-500 text-black";
      break;
    case "rejected":
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

export default OrderStatusCheck;
