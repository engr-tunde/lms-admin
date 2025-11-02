import { formatter } from "../../../utils/helpers";


function PayoutDisputeViewRowTemplate({ item }) {

  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-6 text-sm">{item?._id}</td>
      <td className="py-6 text-sm">{item?.productName}</td>
      <td className="py-6 text-sm">{formatter(item?.price)}</td>
    </tr>
  );
}

export default PayoutDisputeViewRowTemplate;
