import BrandsOrderStatusCheck from './BrandsOrderStatusCheck.jsx';
import { Link } from "react-router-dom";
import { formatter } from "../../../utils/helpers.js";
import { FaChevronDown } from "react-icons/fa";


function BrandsOrderRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm px-2 text-center">
          <Link className="px-3 py-1 underline">
            View
          </Link>
      </td>
      <td className="py-4 text-sm px-2 text-center">{item.orderID}</td>
      <td className="py-4 text-sm px-2 text-center">{item.customer}</td>
      <td className="py-4 text-sm px-2 text-center">{item.brand}</td>
      <td className="py-4 text-sm px-2 text-center">{item.product}</td>
      <td className="py-4 text-sm px-2 text-center">{item.quantity}</td>
      <td className="text-center">
        <BrandsOrderStatusCheck value={item.orderStatus} className="text-sm px-2 py-1"/>
      </td>
      <td className="py-4 text-sm px-2 text-center">
        {formatter(item.totalAmount)}
      </td>
      <td className="p-4">
        <div className="relative">
          <button className="flex text-sm items-center gap-1 px-3 py-1 border">
            Action
            <FaChevronDown size={10} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default BrandsOrderRowTemplate;
