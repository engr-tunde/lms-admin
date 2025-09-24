const OrderViewBuyDetailsCard = ({customerName, customerEmail, customerPhone, customerAddress, brandName, brandEmail, brandPhone, brandAddress, shippingMethod}) => {
  return (
    <div>
      <div className="py-2 text-base">Buy Details</div>
      <div className="px-4 py-4 border-merseBorder border-2 flex flex-col lg:flex-row gap-7 justify-between">
        <div className="flex flex-col gap-1 ">
          <span className="font-semibold mb-1">Customer Details </span>
          <span className="-mb-3">{customerName}</span>
          <div className="flex items-center gap-0 text-sm text-merseLightText">
            <span>{customerEmail}</span>
            <span className="text-3xl leading-none ml-3 mr-[1px]">•</span>
            <span>{customerPhone}</span>
          </div>
          <span className="text-sm">{customerAddress}</span>
        </div>
        <div className="flex flex-col gap-1">
            <span className="font-semibold mb-1">Brand Details </span>
            <a href="#" className="-mb-3">{brandName}</a>
            <div className="flex items-center gap-0 text-sm text-merseLightText">
              <span>{brandEmail}</span>
              <span className="text-3xl leading-none ml-3 mr-[1px]">•</span>
              <span>{brandPhone}</span>
            </div>
            <span className="text-sm">{brandAddress}</span>
        </div>
        <div className="flex flex-col gap-1">
            <span className="font-semibold mb-1">Shipping Method</span>
            <span className="text-sm">{shippingMethod}</span>
        </div>
      </div>
    </div> 
  )
}

export default OrderViewBuyDetailsCard