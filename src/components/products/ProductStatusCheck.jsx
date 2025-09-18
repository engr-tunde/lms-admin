
const ProductStatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "approved":
      bg = "bg-green-500 text-white";
      break;
    case "awaiting approval":
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

export default ProductStatusCheck;
