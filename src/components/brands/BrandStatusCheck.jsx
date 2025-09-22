const BrandStatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "active":
      bg = "bg-green-500 text-white";
      break;
    case "pending":
      bg = "bg-amber-500 text-black";
      break;
    case "rejected":
      bg = "bg-red-600 text-white";
      break;
    default:
      bg = "bg-blue-600 text-white";
  }

  return <span className={`${bg} ${className}`}>{value}</span>;
};

export default BrandStatusCheck;
