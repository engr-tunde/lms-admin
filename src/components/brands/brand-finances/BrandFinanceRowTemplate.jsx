import { Link } from "react-router-dom";
import { formatter } from "../../../utils/helpers.js";
import BrandFinanceStatusCheck from "./BrandFinanceStatusCheck.jsx"


function BrandFinanceRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">{item.payoutID}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.month}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.payoutDate}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.timePeriod}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(item.netPayout)}
      </td>
      <td className="">
        <BrandFinanceStatusCheck value={item.paymentStatus} className="text-sm px-2 py-1"/>
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
