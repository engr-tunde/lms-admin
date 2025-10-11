// import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { capitalize, formatter } from "../../utils/helpers";
import StatusCheck from "../globals/StatusCheck";


function OverviewRowTemplate({ order, i }) {
  return (
    <tr key={order._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-[15px] hidden lg:table-cell ">
          <Link to={`/orders/${order._id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">{order.order}</td>
      <td className="py-4 text-[15px]">{capitalize(order?.shippingAddress?.fullName)}</td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">{order?.items[0]?.brand}</td>
      <td className="py-4 text-[15px]">{capitalize(order?.items[0]?.productName)}</td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">
        {order?.items.reduce((acc, item) => acc + item.quantity, 0)}
      </td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">
        {formatter(order?.totalAmount).slice(0, -3)}
      </td>
      <td className="">
        <StatusCheck className="text-[15px] px-2 py-1" value={capitalize(order?.status)} />
      </td>
    </tr>
  );
}

export default OverviewRowTemplate;
