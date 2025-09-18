
const BrandDisputeStatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "resolved":
      bg = "bg-green-500 text-white";
      break;
    case "open":
      bg = "bg-blue-600 text-white";
      break;
    case "in review":
      bg = "bg-amber-500 text-black";
      break;
    case "rejected":
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

export default BrandDisputeStatusCheck;
