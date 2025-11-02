import { Link } from "react-router-dom";
import { compactDateFormatter, formatter } from "../../../utils/helpers.js";
import BrandFinanceStatusCheck from "./BrandFinanceStatusCheck.jsx"


function BrandFinanceRowTemplate(item) {
  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`payout/${item?._id}`} 
          className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">#P - {item?.id}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{"JUNE"}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{compactDateFormatter(item.createdAt)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.timePeriod}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(item.netPayment)}
      </td>
      <td className="">
        <BrandFinanceStatusCheck value={item.status} className="text-sm px-2 py-1"/>
      </td>
      <td className="p-4">
        <div className="relative">
          <button className="flex text-sm items-center gap-1 px-3 py-1 border">
            Download
          </button>
        </div>
      </td>
    </tr>
  );
}

export default BrandFinanceRowTemplate;
