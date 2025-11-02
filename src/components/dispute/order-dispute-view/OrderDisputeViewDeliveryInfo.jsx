import { FaChevronUp } from "react-icons/fa"
import StatusCheck from "../../globals/StatusCheck"
import { capitalize } from "../../../utils/helpers"

const OrderDisputeViewDeliveryInfo = ({ order }) => {
  return (
    // <div className="flex gap-6 ">
      <div className="flex flex-col gap-6 flex-1 text-md border-2 p-5 w-full lg:w-1/2">
        <div className="font-semibold text-base mb-3"> 
            Delivery information
        </div>
        <div className="flex justify-between">
          <span>Shipping address</span>
          <span className="font-semibold">
            {order?.shippingAddress?.addressLabel}, {order?.shippingAddress?.city}, {order?.shippingAddress?.country}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Status</span>
          <StatusCheck
            value={capitalize(order?.status)}
            className="text-sm px-2 py-1"
          />
        </div>
      </div>
    // </div>
  )
}


export default OrderDisputeViewDeliveryInfo