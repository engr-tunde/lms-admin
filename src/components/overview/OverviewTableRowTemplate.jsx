// import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";
import StatusCheck from "./OverviewStatusCheck";


function OverviewRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-[15px] text-left">
          <Link className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-[15px] text-center">{item.order}</td>
      <td className="py-4 text-[15px] text-center">{item.customer}</td>
      <td className="py-4 text-[15px] text-center">{item.brand}</td>
      <td className="py-4 text-[15px] text-center">{item.product}</td>
      <td className="py-4 text-[15px] text-center">{item.quantity}</td>
      <td className="py-4 text-[15px] text-center">
        {formatter(item.totalAmount)}
      </td>
      <td className="text-center">
        <StatusCheck className="text-[15px] px-2 py-1" value={item.deliveryStatus} />
      </td>
    </tr>
  );
}

export default OverviewRowTemplate;
