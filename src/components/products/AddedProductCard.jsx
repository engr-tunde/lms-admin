function NewlyAddedProductCard({ productImage, productNumber, productBrand, productStatus, productName, productQuantity }) {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex justify-between">
      <div className="w-[25%]">
        <img src={productImage} alt={``} className="w-full h-full object-contain"/>
      </div>
      <div className="flex flex-col gap-1 w-[75%]">
        <div className="flex justify-end"> 
          {/* <span className="text-merseLightText text-xs">{productNumber}</span> */}
          <span className="text-merseLightText text-xs">{productStatus}</span>
        </div>
        <div className="flex flex-col -gap-1">
            <span className="text-sm text-merseLightText">{productBrand}</span>
          <span className="text-sm">{productName}</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-sm">Qty: {productQuantity}</span>
          <span className="border-2 px-1 text-[13px]">View details</span>
        </div>
      </div>
    </div>
  );
}


export default NewlyAddedProductCard;
