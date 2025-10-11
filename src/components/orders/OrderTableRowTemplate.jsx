import StatusCheck from '../globals/StatusCheck'
import { Link } from "react-router-dom";
import { capitalize, formatter, useToggleOpen } from "../../utils/helpers";
import { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';


function OrderRowTemplate({order, i, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);

  return (
    <tr key={order._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/orders/${order._id}`}className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">{order?._id.slice(-5)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{order?.shippingAddress?.fullName}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{capitalize(order.items[0]?.brandName)}</td>
      <td className="py-4 text-sm">{capitalize(order.items[0]?.productName)}</td>
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
               className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col p-3 gap-3 top-6 right-0 bg-white shadow-xl"
               onClick={(e) => e.stopPropagation()}
              >
                <Link to={`/orders/${order._id}`}className="flex items-center gap-1">
                  View details
                </Link>
                <button className={`flex items-center gap-1`}>
                 Refund
                </button>
                <button className={`flex items-center gap-1`}>
                 Cancel
                </button>
              </div>
            )}
        </div>
      </td>
    </tr>
  );
}

export default OrderRowTemplate;
