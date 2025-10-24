import { Link } from "react-router-dom";
import { capitalize, errorNotification, formatter, successNotification, useToggleOpen } from "../../../utils/helpers.js";
import StatusCheck from "../../globals/StatusCheck.jsx"
import ExtraOrderItemsBadge from "../../orders/ExtraOrderItemsBadge.jsx";
import { RiArrowDownSFill } from "react-icons/ri";
import { updateOrderStatus } from "../../../api/index.js";
import { useState } from "react";


function BrandsOrderRowTemplate({ order, i, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);
  const [isTogglingStatus, setisTogglingStatus] = useState(false);

  const updateStatusofOrder = async (id) => {
    try {
      setisTogglingStatus(true);
      const newStatus = order?.status ? "cancelled" : "confirmed";
      const response = await updateOrderStatus(id, { status: newStatus });
      console.log("response", response);
      if (response.status.toString().includes("20")) {
        successNotification(response.data.message);
        mutate()
      } else {
        errorNotification(response?.data?.message);
      }
    } finally {
      setisTogglingStatus(false);
      close()
    }
  }
  
  return (
    <tr key={order?._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell ">
          <Link to={`/orders/${order?._id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell ">ORD{order?._id.slice(-5)}</td>
      <td className="py-4 text-sm hidden lg:table-cell ">{order?.shippingAddress?.fullName}</td>
      <td className="py-4 text-sm hidden lg:table-cell ">{capitalize(order.items[0]?.brandName)}</td>
      <td className="py-4 text-sm">
        <div className="flex items-center gap-3 w-full">
          <span className="text-sm truncate lg:max-w-[150px]">{capitalize(order?.items[0]?.productName)}</span>
          <ExtraOrderItemsBadge items={order?.items} />
        </div>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {order.items.reduce((sum, item) => sum + item.quantity, 0)}
      </td>
      <td className="">
        <StatusCheck value={capitalize(order?.status)} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(order?.totalAmount).slice(0, -3)}
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
              <div 
               className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col p-3 gap-3 top-6 right-0 bg-white shadow-xl"
               onClick={(e) => e.stopPropagation()}
              > 
                <button
                  className={`btnn1-disabled flex items-center gap-1`}
                  disabled={isTogglingStatus}
                  onClick={() => updateStatusofOrder(order?._id)}
                >
                  {
                    isTogglingStatus ?
                    order?.status ? "cancelling..." : "confirming..." :
                    order?.status ? "Cancel" : "Confirm Receipt"
                  }
                </button>
                {/* <button className={`flex items-center gap-1`}>
                 Confirm Receipt
                </button> */}
                <Link to={`/orders/${order._id}`}className="flex items-center gap-1">
                  View details
                </Link>
              </div>
            )}
        </div>
      </td>
    </tr>
  );
}

export default BrandsOrderRowTemplate;
