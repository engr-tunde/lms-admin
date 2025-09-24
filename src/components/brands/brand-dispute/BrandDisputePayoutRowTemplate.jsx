import { Link } from "react-router-dom";
import BrandDisputeStatusCheck from './BrandDisputeStatusCheck';

function BrandDisputePayoutRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm px-2 hidden lg:table-cell">
          <Link className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm px-2">{item.disputeID}</td>
      <td className="py-4 text-sm px-2 hidden lg:table-cell">{item.orderID}</td>
      <td className="py-4 text-sm px-2 hidden lg:table-cell">{item.brand}</td>
      <td className="py-4 text-sm px-2">{item.issueType}</td>
      <td className="">
        <BrandDisputeStatusCheck value={item.status} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm px-2 hidden lg:table-cell">{item.disputedOn}</td>
      <td className="py-4 text-sm px-2 hidden lg:table-cell">{item.lastUpdated}</td>
    </tr>
  );
}

export default BrandDisputePayoutRowTemplate;
