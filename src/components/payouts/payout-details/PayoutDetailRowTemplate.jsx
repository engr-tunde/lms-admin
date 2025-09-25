import { formatter } from "../../../utils/helpers";
import StatusCheck from "../../globals/StatusCheck";

function PayoutDetailRowTemplate(item) {
  
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">{item.orderID}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.customerName}</td>
      <td className="py-4 text-sm">{item.product}</td>
      <td className="py-4 text-sm hidden lg:table-cell">{item.date}</td>
      <td className="py-4 text-sm">
        <StatusCheck value={item.orderStatus} className="px-2 py-1"/>
      </td>
      <td className="py-4 text-sm">
        {formatter(item.totalAmount)}
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(item.commission)}
      </td>
    </tr>
  );
}

export default PayoutDetailRowTemplate;
