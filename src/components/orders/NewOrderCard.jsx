import { capitalize } from "../../utils/helpers";
import ExtraOrderItemsBadge from "./ExtraOrderItemsBadge";

function NewOrderCard({ order }) {
  const totalQty = order?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex gap-3 justify-between">
      <div className="w-[25%]">
        <img src={order.items[0]?.image} alt={order.items[0]?.productName} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-2 w-[75%]">
        <div className="flex justify-between"> 
          <span className="text-merseLightText text-xs">#{order?._id.slice(-5)}</span>
          <span className="text-merseLightText text-xs">{capitalize(order?.status)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm truncate max-w-[150px]">{capitalize(order?.items[0]?.productName)}</span>
          <ExtraOrderItemsBadge items={order?.items} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Qty: {totalQty}</span>
          <span className="border-2 px-1 text-[13px]">Confirm receipt</span>
        </div>
      </div>
    </div>
  );
}


export default NewOrderCard;