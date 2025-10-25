import { FaChevronUp } from "react-icons/fa"
import { email } from "zod/v4"

const OrderTrackingInfoCard = ({ status }) => {

  const statusText = [
    { label: "ware_housed", title: "Order received at Warehouse", date: null, time: null, email: "admin@marse.com" },
    { label: "out_for_delivery", title: "Order out for delivery", date: null, time: null, email: null },
    { label: "delivered", title: "Order delivered to customer", date: null, time: null, email: null },
  ]

  const handleActiveStatus = (title) => {
    return status === title ? "text-black font-semibold" : "text-merseLightText"
  }


  return (
    <div className="flex gap-6 border-2 p-5 w-full lg:w-1/2">
      <div className="flex flex-col gap-1 flex-1 text-md">
        <div className="font-semibold text-lg mb-3 w-full"> 
            Tracking information
        </div>
        {
          statusText.map((item, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <div className={handleActiveStatus(item.label)}>{item.title}</div>
              { item.label === "ware_housed" && 
              <div className="text-merseLightText">
                Confirmed by 
                <span className="text-black">
                  {item.email}
                </span>
              </div>}
            </div>
          ))
        }
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