import { formatter } from "../../../utils/helpers";


function payoutDisputeViewRowTemplate(item) {

  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm">{item.orderId}</td>
      <td className="py-6 text-sm">{item.product}</td>
      <td className="py-6 text-sm">{formatter(item.pricePerItem)}</td>
    </tr>
  );
}

export default payoutDisputeViewRowTemplate;
