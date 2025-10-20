import { Link } from "react-router-dom";
import { capitalize, compactDateFormatter, formatter, useToggleOpen } from "../../utils/helpers";
import StatusCheck from "../globals/StatusCheck";
import { RiArrowDownSFill } from "react-icons/ri";

function PayoutRowTemplate({ payout, i, openIndex, setOpenIndex, mutate, nextDueDate }) {
  const { isOpen, toggle, close, ref } = useToggleOpen(
    openIndex,
    setOpenIndex,
    i
  );

  return (
    <tr key={payout?._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/payout/${payout?._id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">{capitalize(payout?.brand?.name)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{200}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(payout.totalSales).slice(0, -3)}
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(payout?.commission).slice(0, -3)}
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(payout?.netPayment).slice(0, -3)}
      </td>
      <td className="py-4 text-sm">
        <StatusCheck value={capitalize(payout?.status)} className="px-2 py-1"/>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell text-merseLightText">{compactDateFormatter(nextDueDate)}</td>
      <td className="py-4">
        <div 
          className="relative  mr-auto"
          ref={ref}
        >
          <button 
            className="flex text-sm items-center gap-1 px-3 py-1 border"
            onClick={(e) => {
              toggle(); 
              e.stopPropagation();
            }}
          >
            <span>Actions</span>
            <RiArrowDownSFill />
          </button>
          {isOpen && (
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
