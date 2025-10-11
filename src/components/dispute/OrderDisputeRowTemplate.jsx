import { Link } from "react-router-dom";
import StatusCheck from '../globals/StatusCheck';
import { capitalize, dateFormatter } from "../../utils/helpers";

function OrderDisputeRowTemplate({ item, i }) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/dispute-order/${item._id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">{item?._id}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item?.order?._id}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item?.customer || "My customer"}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item?.brand?.id}</td>
      <td className="py-4 text-sm">{item?.disputeType}</td>
      <td className="">
        <StatusCheck value={item?.status} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">{dateFormatter(item.createdAt)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{dateFormatter(item.updatedAt)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        <StatusCheck value={capitalize(item.urgency)} className="text-sm px-2 py-1"/>
      </td>
    </tr>
  );
}

export default OrderDisputeRowTemplate;
