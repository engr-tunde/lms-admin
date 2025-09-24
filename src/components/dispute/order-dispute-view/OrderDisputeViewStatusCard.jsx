const OrderDisputeViewStatusCard = ({ issueType, customerName, customerEmail, brandName, brandEmail, urgencyLevel, preferredAction }) => {
  return (
    <div className="bg-gray-200/50 w-full p-4 ">
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Issue Type</span>
          <span className="text-base">{issueType}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Customer</span>
          <div className="text-base flex flex-col">
            <span>{customerName}</span>
            <span className="text-merseLightText">{customerEmail}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Brand</span>
          <div className="text-base flex flex-col">
            <span>{brandName}</span>
            <span className="text-merseLightText">{brandEmail}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Urgency Level</span>
          <span className="text-base px-3 py-1 bg-red-500 flex justify-center">{urgencyLevel}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Preferred Action</span>
          <span className="text-base">{preferredAction}</span>
        </div>
        </div>
    </div>
  )
}

export default OrderDisputeViewStatusCard