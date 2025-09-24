import { FaChevronUp } from "react-icons/fa"

const OrderDisputeViewSummaryCard = ({orderId, orderDate, totalAmount}) => {
  return (
    <div className="flex flex-col gap-1 flex-1 text-md border-2 p-5 w-full lg:w-1/2">
      <div className="flex justify-between mb-3 font-semibold">
        Order Summary
      </div>
      <div className="flex justify-between">
        <span>Order ID</span>
        <span className="font-semibold">{orderId}</span>
      </div>
      <div className="flex justify-between">
        <span>Order Date</span>
        <span>{orderDate}</span>
      </div>
      <div className="flex justify-between mt-10 border-t border-merseBorder pt-2">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
    </div>
  )
}


export default OrderDisputeViewSummaryCard