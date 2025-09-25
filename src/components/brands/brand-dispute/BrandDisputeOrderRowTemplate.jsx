import { Link } from "react-router-dom";
import StatusCheck from '../../globals/StatusCheck';

function BrandDisputeOrderRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/dispute-order/${item.id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">{item.disputeID}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.orderID}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.customer}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.brand}</td>
      <td className="py-4 text-sm">{item.issueType}</td>
      <td className="">
        <StatusCheck value={item.status} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.disputedOn}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.lastUpdated}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        <StatusCheck value={item.urgencyLevel} className="text-sm px-2 py-1"/>
      </td>
    </tr>
  );
}

export default BrandDisputeOrderRowTemplate;
