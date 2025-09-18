import { Link } from "react-router-dom";
import BrandDisputeStatusCheck from './BrandDisputeStatusCheck';

function BrandDisputePayoutRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm px-2 text-center">
          <Link className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm px-2 text-center">{item.disputeID}</td>
      <td className="py-4 text-sm px-2 text-center">{item.orderID}</td>
      <td className="py-4 text-sm px-2 text-center">{item.brand}</td>
      <td className="py-4 text-sm px-2 text-center">{item.issueType}</td>
      <td className="text-center">
        <BrandDisputeStatusCheck value={item.status} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm px-2 text-center">{item.disputedOn}</td>
      <td className="py-4 text-sm px-2 text-center">{item.lastUpdated}</td>
    </tr>
  );
}

export default BrandDisputePayoutRowTemplate;
