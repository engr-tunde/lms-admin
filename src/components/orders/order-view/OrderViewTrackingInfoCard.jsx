import { FaChevronUp } from "react-icons/fa"

const OrderTrackingInfoCard = () => {
  return (
    <div className="flex gap-6 border-2 p-5 w-full lg:w-1/2">
      <div className="flex flex-col gap-1 flex-1 text-md">
        <div className="font-semibold text-lg mb-3"> 
            Tracking information
        </div>
        <div className="flex flex-col gap-1">
          <div>Order received at Warehouse</div>
          <div className="text-merseLightText">Confirmed by <span className="text-black">admin@marse.com</span></div>
        </div>
        <div className="text-merseLightText">
            Order out for delivery
        </div>
        <div className="text-merseLightText">
            Order delivered to customer
        </div>
      </div>
      <div className="flex items-center gap-0 text-sm">
            <span>July 25, 2025</span>
            <span className="text-3xl leading-none ml-3 mr-[1px]">•</span>
            <span className="text-merseLightText" >10:50 AM</span>
      </div>
    </div>
  )
}


export default OrderTrackingInfoCard