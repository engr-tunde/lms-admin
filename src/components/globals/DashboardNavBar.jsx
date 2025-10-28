import { useLocation, useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { useMemo, useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

const DashboardNavBar = ({ title, subtitle, status, copyable }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  // Extract breadcrumb data passed from previous page
  const breadcrumbFromState = location.state?.breadcrumb;

  const { baseLabel, detailLabel, showBreadcrumb } = useMemo(() => {
    let path = location.pathname.toLowerCase();
    if (path === "/") path = "/overview";
    const mainPages = [
      "/overview", 
      "/orders", 
      "/users", 
      "/brands", 
      "/products", 
      "/payout", 
      "/dispute", 
      "/members", 
      "/analytics", 
      "/settings"
    ];

    if (mainPages.includes(path)) {
      return { showBreadcrumb: false };
    }
    let base = "";
    let detail = "";

    if (path.includes("/orders/")) {
      base = "Orders";
      detail = "Order Details";
    } else if (path.includes("/users/")) {
      base = "Users";
      detail = "User Details";
    } else if (path.includes("/brands/")) {
      base = "Brands";
      detail = "Brand Details";
    } else if (path.includes("/products/")) {
      base = "Products";
      detail = "Product Details";
    } else if (path.includes("/payout/")) {
      base = "Payout";
      detail = "Payout Details";
    } else if (path.includes("/")) {
      base = "Overview";
      detail = "Overview Details";
    }
    return {
      baseLabel: breadcrumbFromState?.base || base,
      detailLabel: breadcrumbFromState?.detail || detail,
      showBreadcrumb: true,
    };
  }, [location, breadcrumbFromState]);

  const handleBack = () => {
    if (breadcrumbFromState?.backTo) {
      navigate(breadcrumbFromState.backTo);
    } else {
      navigate(-1);
    }
  };

  const handleCopy = async () => {
    if (!copyable) return;
    try {
      await navigator.clipboard.writeText(title);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };


  const getStatusClass = (status) => {
    if (!status) return "";
    return statusColors[status.toLowerCase()] || "bg-gray-300 text-black";
  };

  return (
    <div className="mb-6 flex flex-col gap-2">
      {showBreadcrumb && (
        <div className="flex items-center gap-2 text-[12px]">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-gray-700 hover:text-black transition"
          >
            <BsChevronLeft size={10} />
            Back
          </button>

          {baseLabel && (
            <>
              <span className="text-gray-400">{baseLabel}</span>
              <span className="text-gray-500">{">"}</span>
            </>
          )}

          {detailLabel && (
            <span className="text-black font-semibold">{detailLabel}</span>
          )}
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className="text-xl font-semibold">{title}</div>
        {copyable && (
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1 text-xs transition ${
              copied
                ? "text-green-600 bg-green-50"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {copied ? (
              <>
                <FaCheck size={12} /> Copied!
              </>
            ) : (
              <>
                <RiFileCopyLine size={14} /> Copy
              </>
            )}
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
