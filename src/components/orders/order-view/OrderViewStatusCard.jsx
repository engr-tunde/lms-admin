import { capitalize, dateFormatter, dateTimeFormatter, formatter } from "../../../utils/helpers"

const OrderViewStatusCard = ({ order }) => {
  const deliveryDate = new Date(new Date(order?.createdAt).getTime() + ((order?.deliveryTimeDays) * 24 * 60 * 60 * 1000));
  console.log("deliveryDate", deliveryDate);
  return (
    <div className="bg-gray-200/50 w-full p-4 ">
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Order Status</span>
          <span className="text-sm">{capitalize(order?.status)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Order time</span>
          <span className="text-sm">{dateTimeFormatter(order?.createdAt)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Set delivery date</span>
          <span className="text-sm">{dateFormatter(deliveryDate)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Total order</span>
          <span className="text-sm">{formatter(order?.totalAmount).slice(0, -3)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Payment status</span>
          <span className="text-sm">{capitalize(order?.paymentStatus)}</span>
        </div>
        </div>
    </div>
  )
}
export default OrderViewStatusCard
