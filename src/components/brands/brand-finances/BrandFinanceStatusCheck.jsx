import { AiOutlineCheckCircle, AiOutlineExclamationCircle, AiOutlineInfoCircle } from "react-icons/ai";


const BrandFinanceStatusCheck = ({ value, className = "" }) => {
  let bg = "";
  let Icon = AiOutlineInfoCircle

  switch (value?.toLowerCase()) {
    case "completed":
      bg = "bg-green-500 text-white";
      Icon = AiOutlineCheckCircle;
      break;
    case "pending":
      bg = "bg-amber-500 text-black";
      Icon = AiOutlineExclamationCircle;
      break;
    case "failed":
      bg = "bg-red-600 text-white";
      Icon = AiOutlineInfoCircle;
      break;
    default:
      bg = "";
  }

  return (
    <span 
     className={`inline-flex items-center justify-between gap-2 px-3 py-1 text-sm font-medium ${bg} ${className}`}
    >
      {value}
      <Icon className="w-4 h-4 text-white" />
    </span>
  );
};

export default BrandFinanceStatusCheck;
