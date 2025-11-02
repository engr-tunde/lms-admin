import { FaChevronUp } from "react-icons/fa"
import { fetchOrder } from "../../../api";
import { compactDateFormatter, formatter } from "../../../utils/helpers";

const OrderDisputeViewSummaryCard = ({ order }) => {

  return (
    <div className="flex flex-col gap-1 flex-1 text-md border-2 p-5 w-full lg:w-1/2">
      <div className="flex justify-between mb-3 font-semibold">
        Order Summary
      </div>
      <div className="flex justify-between">
        <span>Order ID</span>
        <span className="font-semibold">ORD-{order?._id.slice(-5)}</span>
      </div>
      <div className="flex justify-between">
        <span>Order Date</span>
        <span>{compactDateFormatter(order?.createdAt)}</span>
      </div>
      <div className="flex justify-between mt-10 border-t border-merseBorder pt-2">
        <span>Total Amount</span>
        <span>{formatter(order?.totalAmount)}</span>
      </div>
    </div>
  )
}


export default OrderDisputeViewSummaryCard