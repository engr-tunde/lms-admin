const BrandShippingDetails = ({ brand }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-sm border-b-2 p-4">Shipping details</div>
      <div className="w-full h-full flex flex-col">
        <span className="p-4 text-sm">Submitted information</span>
        <div className="w-full h-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100/50 p-4">
            <div className="col-span-1 flex flex-col gap-1">
              <span className="text-sm font-semibold">Warehouse address</span>
              <span className="text-sm w-[80%]">{brand?.shipping?.warehouse_address || "N/A"}</span>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <span className="text-sm font-semibold">Shipping</span>
              <span className="text-sm">Standard delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandShippingDetails