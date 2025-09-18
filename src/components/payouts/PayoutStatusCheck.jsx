
const PayoutStatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "delivered":
      bg = "bg-green-500 text-white";
      break;
    case "pending":
      bg = "bg-amber-500 text-black";
      break;
    case "failed":
      bg = "bg-red-600 text-white";
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

export default PayoutStatusCheck;
