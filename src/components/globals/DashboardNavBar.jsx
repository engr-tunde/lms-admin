// const DashboardNavBar = ({ title, subtitle, path }) => {
//   return (
//     <div className="flex flex-col gap-2">
//       <div className="text-xs text-light">{path}</div>
//       <div className="text-xl font-semibold">{title}</div>
//       <div className="text-sm">{subtitle}</div>
//     </div>
//   );
// };

// export default DashboardNavBar;





import { RiFileCopyLine } from "react-icons/ri";

const statusColors = {
  pending: "bg-amber-500 text-white",
  "in review": "bg-amber-500 text-white",
  completed: "bg-green-500 text-white",
  done: "bg-green-500 text-white",
  open: "bg-blue-500 text-white",
  rejected: "bg-red-500 text-white",
  failed: "bg-red-500 text-white",
};

const DashboardNavBar = ({ path, title, subtitle, status, copyable }) => {
  
  const handleCopy = () => {
    if (copyable) {
      navigator.clipboard.writeText(title);
    }
  };

  const getStatusClass = (status) => {
    if (!status) return "";
    return statusColors[status.toLowerCase()] || "bg-gray-300 text-black";
  };

  return (
    <div className="flex flex-col gap-2">
      {path && 
        <div className="text-xs text-gray-400">
          {path}
        </div>
      }
      <div className="flex items-center gap-2">
        <div className="text-xl font-semibold">{title}</div>
        {copyable && (
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-xs"
          >
            <RiFileCopyLine size={16} /> Copy
          </button>
        )}

        {status && (
          <span
            className={`px-2 py-1 text-xs capitalize ${getStatusClass(
              status
            )}`}
          >
            {status}
          </span>
        )}
      </div>
      {subtitle && 
        <div className="text-sm text-gray-600">
          {subtitle}
        </div>
        }
    </div>
  );
};

export default DashboardNavBar;
