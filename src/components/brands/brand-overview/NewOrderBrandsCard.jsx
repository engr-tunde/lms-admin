import { capitalize } from "../../../utils/helpers";
import ExtraOrderItemsBadge from "../../orders/ExtraOrderItemsBadge";

function NewOrderBrandsCard({ newOrder }) {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex justify-between">
      <div className="w-[25%]">
        <img src={newOrder?.items[0]?.image} alt={``} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-2 w-[75%]">
        <div className="flex justify-between"> 
          <span className="text-merseLightText text-xs">#{newOrder?._id.slice(-5)}</span>
          <span className="text-merseLightText text-xs">{(newOrder?.status)}</span>
        </div>
        <div className="flex items-center gap-3 w-full">
          <span className="text-sm truncate lg:max-w-[150px]">{capitalize(newOrder?.items[0]?.productName)}</span>
          <ExtraOrderItemsBadge items={newOrder?.items} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Qty: 
            {newOrder?.items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          <span className="border-2 px-1 text-[13px]">Confirm receipt</span>
        </div>
      </div>
    </div>
  );
}


export default NewOrderBrandsCard;
