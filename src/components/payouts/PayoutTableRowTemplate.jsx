import { useState } from "react";
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";
import PayoutStatusCheck from "./PayoutStatusCheck";
import { RiArrowDownSFill } from "react-icons/ri";

function PayoutRowTemplate(item, i) {
  const [actionOpen, setActionOpen] = useState(null);
  
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm text-center">
          <Link className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm text-center">{item.brand}</td>
      <td className="py-4 text-sm text-center">{item.completedOrders}</td>
      <td className="py-4 text-sm text-center">
        {formatter(item.totalSales)}
      </td>
      <td className="py-4 text-sm text-center">
        {formatter(item.commission)}
      </td>
      <td className="py-4 text-sm text-center">
        {formatter(item.netPayoutAmount)}
      </td>
      <td className="py-4 text-sm text-center">
        <PayoutStatusCheck value={item.payoutStatus} className="px-2 py-1"/>
      </td>
      <td className="py-4 text-sm text-center text-merseLightText">{item.payoutDueDate}</td>
      <td className="p-4">
        <div className="relative">
          <button 
            className="flex text-sm items-center gap-1 px-3 py-1 border"
            onClick={() => handleActionClick(i)}
          >
            <span>Actions</span>
            <RiArrowDownSFill />
          </button>
          {actionOpen === i && (
              <div className="absolute z-10 w-[150px] text-xs rounded-md flex flex-col p-3 gap-3 top-9 left-0 bg-white shadow-xl">
                <div className="flex items-center gap-1">
                  <span>View details</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Approve payout</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Hold payout</span>
                </div>
              </div>
            )}
        </div>
      </td>
    </tr>
  );
}

export default PayoutRowTemplate;
