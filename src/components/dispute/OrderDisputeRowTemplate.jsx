import { Link } from "react-router-dom";
import DisputeStatusCheck from './DisputeStatusCheck';

function OrderDisputeRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm px-2 text-center">
          <Link to="/dispute-order/:id" className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm px-2 text-center">{item.disputeID}</td>
      <td className="py-4 text-sm px-2 text-center">{item.orderID}</td>
      <td className="py-4 text-sm px-2 text-center">{item.customer}</td>
      <td className="py-4 text-sm px-2 text-center">{item.brand}</td>
      <td className="py-4 text-sm px-2 text-center">{item.issueType}</td>
      <td className="text-center">
        <DisputeStatusCheck value={item.status} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm px-2 text-center">{item.disputedOn}</td>
      <td className="py-4 text-sm px-2 text-center">{item.lastUpdated}</td>
      <td className="py-4 text-sm px-2 text-center">{item.urgencyLevel}</td>
    </tr>
  );
}

export default OrderDisputeRowTemplate;
