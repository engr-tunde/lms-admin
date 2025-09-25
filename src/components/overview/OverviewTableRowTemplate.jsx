// import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";
import StatusCheck from "../globals/StatusCheck";


function OverviewRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-[15px] hidden lg:table-cell ">
          <Link to={`/orders/${item.id}`} className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">{item.order}</td>
      <td className="py-4 text-[15px]">{item.customer}</td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">{item.brand}</td>
      <td className="py-4 text-[15px]">{item.product}</td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">{item.quantity}</td>
      <td className="py-4 text-[15px] hidden lg:table-cell ">
        {formatter(item.totalAmount)}
      </td>
      <td className="">
        <StatusCheck className="text-[15px] px-2 py-1" value={item.deliveryStatus} />
      </td>
    </tr>
  );
}

export default OverviewRowTemplate;
