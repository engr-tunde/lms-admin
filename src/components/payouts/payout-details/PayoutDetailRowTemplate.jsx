import { capitalize, compactDateFormatter, formatter, useToggleOpen } from "../../../utils/helpers";
import StatusCheck from "../../globals/StatusCheck";
import ExtraOrderItemsBadge from "../../orders/ExtraOrderItemsBadge";

function PayoutDetailRowTemplate({ item, i, mutate, commission }) {
  
  return (
    <tr key={item?._id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm hidden lg:table-cell">{item?._id.slice(-5)}</td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {/* {item.customerName} */}
        My Name
      </td>
      <td className="py-4 text-sm">
        <div className="flex items-center gap-3 w-full">
          <span className="text-sm truncate lg:max-w-[150px]">{capitalize(item?.items[0]?.productName)}</span>
          <ExtraOrderItemsBadge items={item?.items} />
        </div>
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">{compactDateFormatter(item?.createdAt)}</td>
      <td className="py-4 text-sm">
        <StatusCheck value={capitalize(item?.status)} className="px-2 py-1" />
      </td>
      <td className="py-4 text-sm">
        {formatter(item?.totalAmount).slice(0, -3)}
      </td>
      <td className="py-4 text-sm hidden lg:table-cell">
        {formatter(commission).slice(0, -3)}
      </td>
    </tr>
  );
}

export default PayoutDetailRowTemplate;
