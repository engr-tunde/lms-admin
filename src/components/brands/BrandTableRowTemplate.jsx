import { Link } from "react-router-dom";
import {
  formatter,
  compactDateFormatter,
  capitalize,
  useToggleOpen,
  errorNotification,
  successNotification,
} from "../../utils/helpers";
import StatusCheck from "../globals/StatusCheck.jsx";
import { RiArrowDownSFill } from "react-icons/ri";
import { activateDeactivateBrand } from "../../api";
import { useState } from "react";

function BrandTableRowTemplate({ brand, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(
    openIndex,
    setOpenIndex,
    brand?.id
  );

  const handleActivateDeactivateBrand = async (action, id) => {
    try {
      const payload = { status: action };
      const response = await activateDeactivateBrand(payload, id);
      console.log("response", response);
      if (response.status.toString().includes("20")) {
        successNotification(response.data.message);
        mutate();
        close();
      } else {
        errorNotification(response?.data?.message);
      }
    } finally {
      close();
    }
  };

  return (
    <tr key={brand?.id} className="border-1 border-t border-merseBorder">
      <td className="hidden lg:table-cell py-4 text-sm px-2 text-center">
        <Link to={`/brands/${brand?.id}`} className="px-3 py-1 underline">
          View
        </Link>
      </td>
      <td className="py-4 text-sm ">{brand?.name}</td>
      {/* <td className="hidden lg:table-cell py-4 text-sm ">{brand?.products}</td>
      <td className="hidden lg:table-cell py-4 text-sm ">
        { brand.totalSales ? formatter(brand.totalSales) : 0}
      </td> */}
      {/* <td className="hidden lg:table-cell py-4 text-sm ">{brand?.orders}</td> */}
      <td className="">
        <StatusCheck
          value={capitalize(brand?.status)}
          className="text-sm py-1 px-2 rounded-sm"
        />
      </td>
      <td className="hidden lg:table-cell py-4 text-sm ">
        {compactDateFormatter(brand.created_at)}
      </td>
      <td className="py-4">
        <div className="relative" ref={ref}>
          <button
            className="flex text-sm items-center gap-1 px-3 py-1 border"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            Action
            <RiArrowDownSFill size={10} />
          </button>
          {isOpen && (
            <div className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col right-0 bg-white shadow-xl border-[1px]">
              <Link
                to={`/brands/${brand?.id}`}
                className="text-sm text-left px-5 py-2"
                onClick={close}
              >
                View Details
              </Link>
              {brand?.status === "inActive" || brand?.status === "pending" ? (
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() =>
                    handleActivateDeactivateBrand("activate", brand?.id)
                  }
                >
                  Activate
                </button>
              ) : null}
              {brand?.status === "active" || brand?.status === "pending" ? (
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() =>
                    handleActivateDeactivateBrand("deactivate", brand?.id)
                  }
                >
                  Deactivate
                </button>
              ) : null}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default BrandTableRowTemplate;
