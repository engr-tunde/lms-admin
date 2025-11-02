import StatusCheck from '../globals/StatusCheck'
import { Link } from "react-router-dom";
import { capitalize, errorNotification, formatter, successNotification, toSentence, useToggleOpen } from "../../utils/helpers";
import { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { updateOrderStatus } from '../../api';
import ExtraOrderItemsBadge from './ExtraOrderItemsBadge';


function OrderRowTemplate({order, i, openIndex, setOpenIndex, mutate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);

  const nextStatusMap = {
    in_transit: "ware_housed",
    ware_housed: "out_for_delivery",
    out_for_delivery: "delivered",
  };

  const orderStage = (status) => {
    switch (status) {
      case "in_transit":
        return "Confirm Receipt";
      case "ware_housed":
        return "Mark for Delivery";
      case "out_for_delivery":
        return "Mark as Delivered";
      case "delivered":
        return "No further action";
      default:
        return null;
    }
  };
  
  const handleUpdateOrderStatus = async (currentStatus, orderId) => {
    const nextStatus = nextStatusMap[currentStatus];
    if (!nextStatus) {
      errorNotification("No further action available for this order");
      close()
      return;
    }

    try {
      const response = await updateOrderStatus(values, orderId);
      if (response?.status?.toString()?.includes("20")) {
        successNotification(response?.data?.message);
        mutate?.();
        close();
      } else {
        errorNotification(response?.data?.message[0]);
      }
    } catch (err) {
      errorNotification("Failed to update order status");
    }
  };
  

  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/orders/${order._id}`}className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">ORD{order?._id.slice(-5)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{order?.shippingAddress?.fullName}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{capitalize(order.items[0]?.brandName)}</td>
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
        <StatusCheck value={toSentence(order?.status)} className="text-sm px-2 py-1"/>
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
                  className={`flex items-center gap-1`}
                  onClick={() => handleUpdateOrderStatus(order?.status, order?._id)}
                >
                 {orderStage(order?.status)}
                </button>
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

export default OrderRowTemplate;
