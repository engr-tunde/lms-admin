import { FaChevronUp } from "react-icons/fa"

const OrderDisputeViewDeliveryInfo = () => {
  return (
    // <div className="flex gap-6 ">
      <div className="flex flex-col gap-6 flex-1 text-md border-2 p-5 w-full lg:w-1/2">
        <div className="font-semibold text-base mb-3"> 
            Delivery information
        </div>
        <div className="flex justify-between">
          <span>Shipping address</span>
          <span className="font-semibold">123 Main St, Anytown, CA 90210</span>
        </div>
        <div className="flex justify-between">
          <span>Status</span>
          <span className="bg-amber-500 px-2 py-1 text-sm">Pending</span>
        </div>
      </div>
    // </div>
  )
}


export default OrderDisputeViewDeliveryInfo