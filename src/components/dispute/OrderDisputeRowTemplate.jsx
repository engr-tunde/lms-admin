import { Link } from "react-router-dom";
import StatusCheck from '../globals/StatusCheck';
import { capitalize, compactDateFormatter, dateFormatter, toSentence } from "../../utils/helpers";

function OrderDisputeRowTemplate({ item, i }) {

  return (
    <tr key={item._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/dispute-order/${item._id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">#{item?._id.slice(-5)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {item?.order && `#${item?.order?.id.slice(-5)}`}
      </td>
      {/* <td className="py-4 text-sm hidden lg:table-cell">{item?.customer || "My customer"}</td> */}
      <td className="py-4 text-sm hidden lg:table-cell">{item?.brand?.name}</td>
      <td className="py-4 text-sm">{toSentence(item?.disputeType)}</td>
      <td className="">
        <StatusCheck value={toSentence(item?.status)} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">{compactDateFormatter(item.createdAt)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{compactDateFormatter(item.updatedAt)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        <StatusCheck value={capitalize(item.urgency)} className="text-sm px-2 py-1"/>
      </td>
    </tr>
  );
}

export default OrderDisputeRowTemplate;

