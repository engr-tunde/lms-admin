import { Link } from "react-router-dom";
import StatusCheck from '../globals/StatusCheck';
import { capitalize, dateFormatter } from "../../utils/helpers";
// import { fetchAllBrands } from "../../api";

function OrderDisputeRowTemplate({ item, i }) {
  // const { brands } = fetchAllBrands()
  // console.log("brands", brands);
  // const disputeBrand = brands?.brands?.filter(brand => brand?.id === item?.brand?.id)
  // console.log("disputeBrand", disputeBrand);
  // console.log("itemId", item?.brand?.id);

  return (
    <tr key={item._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">
          <Link to={`/dispute-order/${item._id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm">#{item?._id.slice(-5)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">#{item?.order?._id.slice(-5)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item?.customer || "My customer"}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item?.brand?.id.slice(-5)}</td>
      <td className="py-4 text-sm">{toSentence(item?.disputeType)}</td>
      <td className="">
        <StatusCheck value={toSentence(item?.status)} className="text-sm px-2 py-1"/>
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


function toSentence(str) {
  if (!str) return "";
  return str
    .replace(/_/g, " ")              // replace underscores with spaces
    .replace(/\s+/g, " ")            // remove extra spaces
    .trim()                          // trim leading/trailing spaces
    .replace(/^./, c => c.toUpperCase()); // capitalize first letter
}