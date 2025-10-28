import { Link } from "react-router-dom";
import StatusCheck from '../../globals/StatusCheck';
import { toSentence } from "../../../utils/helpers";

function BrandDisputePayoutRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/dispute-payout/${item?._id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">{item?._id}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.order?._id}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item?.brand?.name}</td>
      <td className="py-4 text-sm">{item.disputeType}</td>
      <td className="">
        <StatusCheck value={toSentence(item?.status)} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.createdAt}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.updatedAt}</td>
    </tr>
  );
}

export default BrandDisputePayoutRowTemplate;