import { Link } from "react-router-dom";
import { formatter, compactDateFormatter, capitalize, useToggleOpen, errorNotification, successNotification } from "../../utils/helpers";
import StatusCheck from "../globals/StatusCheck.jsx"
import { RiArrowDownSFill } from "react-icons/ri";
import { verifyBrand, activateDeactivateBrand } from "../../api";
import { useState } from "react";

function BrandTableRowTemplate({  brand, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, brand?.id);
  const [rejectReason, setRejectReason] = useState("GoodLuck Lets get things started. Lets make great waves in ecommerce");

  const handleBrandVerification = async (id, action) => {
    try {
      const payload = { status: action }; // 'accept' or 'reject'
      payload.rejectReason = rejectReason;
      // ## The code commented below should run. But backend insisting on rejectReason for both actions
      // if (action === "reject") {
      //   if (!rejectReason) {
      //     errorNotification("Please provide a reason for rejection");
      //     return;
      //   }
      //   payload.rejectReason = rejectReason;
      // }
      const response = await verifyBrand(payload, id);
      console.log("response", response);
      if (response.status.toString().includes("20")) {
        successNotification(response.data.message);
        mutate()
        setRejectReason("");
        close();
      } else {
        errorNotification(response?.data?.message);
      }
    } finally {
      close();
    }
  }

  const handleActivateDeactivateBrand = async (id, action) => {
    try {
      const payload = { status: action }; 
      payload.rejectReason = rejectReason;
      // ## The oneliner above should not run. But backend insisting on rejectReason for both actions eventhough neither needs it
      const response = await verifyBrand(payload, id);
      console.log("response", response);
      if (response.status.toString().includes("20")) {
        successNotification(response.data.message);
        mutate()
        setRejectReason("");
        close();
      } else {
        errorNotification(response?.data?.message);
      }
    } finally {
      close();
    }

  }

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
      <td className="hidden lg:table-cell py-4 text-sm ">{compactDateFormatter(brand.created_at)}</td>
      <td className="py-4">
        <div 
          className="relative"
          ref={ref}
        >
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
              {
                !brand?.isVerified ? (
                  <>
                  <button
                   className="text-sm text-left px-5 py-2"
                   onClick={() => handleBrandVerification(brand?.id, "accept")}
                  >
                    Accept
                  </button>
                  <button
                   className="text-sm text-left px-5 py-2"
                   onClick={() => handleBrandVerification(brand?.id, "reject")}
                  >
                    Reject
                  </button>
                  </>
                ) : (
                  brand?.status === "inactive" || brand?.status === "pending" ? (
                    <button
                      className="text-sm text-left px-5 py-2"
                      onClick={() => handleActivateDeactivateBrand(brand?.id, "active")}
                    >
                      Activate
                    </button>
                ) : (
                  brand?.status === ("active") ? (
                    <button
                      className="text-sm text-left px-5 py-2"
                      onClick={() => handleActivateDeactivateBrand(brand?.id, "inactive")}
                    >
                      Deactivate
                    </button>
                  ) : null
                )
                    
                  
                )
              }
              
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default BrandTableRowTemplate;
