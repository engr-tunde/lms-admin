import OrderStatusCheck from './OrderStatusCheck'
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";
import { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';


function OrderRowTemplate(item, i) {

  const [actionOpen, setActionOpen] = useState(null);
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm px-2 text-center">
          <Link to={`/orders/${item.id}`}className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm px-2 text-center">{item.orderID}</td>
      <td className="py-4 text-sm px-2 text-center">{item.customer}</td>
      <td className="py-4 text-sm px-2 text-center">{item.brand}</td>
      <td className="py-4 text-sm px-2 text-center">{item.product}</td>
      <td className="py-4 text-sm px-2 text-center">{item.quantity}</td>
      <td className="text-center">
        <OrderStatusCheck value={item.orderStatus} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm px-2 text-center">
        {formatter(item.totalAmount)}
      </td>
      <td className="p-4">
        <div className="relative">
          <button 
            className="flex text-sm items-center gap-1 px-3 py-1 border"
            onClick={() => handleActionClick(i)}
            >
            Action
            <RiArrowDownSFill size={10} />
          </button>
          {actionOpen === i && (
              <div className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col p-3 gap-3 top-9 left-0 bg-white shadow-xl">
                <div className="flex items-center gap-1">
                  <span>View details</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Refund</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Cancel</span>
                </div>
              </div>
            )}
        </div>
      </td>
    </tr>
  );
}

export default OrderRowTemplate;
