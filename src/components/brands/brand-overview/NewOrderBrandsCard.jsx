function NewOrderBrandsCard({ orderImage, orderNumber, orderStatus, product, quantity }) {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex justify-between">
      <div className="w-[25%]">
        <img src={orderImage} alt={``} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-2 w-[75%]">
        <div className="flex justify-between"> 
          <span className="text-merseLightText text-xs">{orderNumber}</span>
          <span className="text-merseLightText text-xs">{orderStatus}</span>
        </div>
        <div className="">
          <span className="text-sm">{product}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Qty: {quantity}</span>
          <span className="border-2 px-1 text-[13px]">Confirm receipt</span>
        </div>
      </div>
    </div>
  );
}


export default NewOrderBrandsCard;
