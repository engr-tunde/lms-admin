// import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";
import PayoutStatusCheck from "./PayoutStatusCheck";
import { FaChevronDown } from "react-icons/fa";

function PayoutRowTemplate(item) {
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
          <button className="flex text-sm items-center gap-1 px-3 py-1 border">
            Action
            <FaChevronDown size={10} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default PayoutRowTemplate;
