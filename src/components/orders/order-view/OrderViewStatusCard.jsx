const OrderViewStatusCard = ({ status, orderTime, deliveryDate, orderSum, paymentStatus }) => {
  return (
    <div className="bg-gray-200/50 w-full p-4 ">
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Order Status</span>
          <span className="text-sm">{status}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Order time</span>
          <span className="text-sm">{orderTime}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Set delivery date</span>
          <span className="text-sm">{deliveryDate}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Total order</span>
          <span className="text-sm">{orderSum}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Payment status</span>
          <span className="text-sm">{paymentStatus}</span>
        </div>
        </div>
    </div>
  )
}
export default OrderViewStatusCard