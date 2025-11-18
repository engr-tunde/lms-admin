const StatusCheck = ({ value, className = "" }) => {
  let bg = "";

  switch (value?.toLowerCase()) {
    case "published":
      bg = "bg-green-500 text-white";
      break;
    case "archived":
      bg = "bg-amber-500 text-black";
      break;
    case "draft":
      bg = "bg-gray-600 text-white";
      break;
    default:
      bg = "";
  }

  return <span className={`${bg} ${className}`}>{value}</span>;
};

export default StatusCheck;
