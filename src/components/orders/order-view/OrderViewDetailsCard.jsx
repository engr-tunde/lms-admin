import { capitalize } from "../../../utils/helpers";
// import { }

const OrderViewBuyDetailsCard = ({ order, brandName, brandEmail, brandPhone, brandAddress, shippingMethod }) => {

  const customerAddress = `${order?.shippingAddress?.addressLabel}, ${order?.shippingAddress?.state}, ${order?.shippingAddress?.country}`;
  return (
    <div>
      <div className="py-2 text-base">Buy Details</div>
      <div className="px-4 py-4 border-merseBorder border-2 flex flex-col lg:flex-row gap-7 justify-between">
        <div className="flex flex-col gap-1 ">
          <span className="font-semibold mb-1">Customer Details </span>
          {order?.shippingAddress?.fullName && 
          <span className="-mb-3">{order?.shippingAddress?.fullName}</span>
          }
          <div className="flex items-center gap-0 text-sm text-merseLightText">
            {order?.shippingAddress?.email &&
              <span>{order?.shippingAddress?.email}</span>
            }
            {order?.shippingAddress?.phoneNumber &&
            <>
            <span className="text-3xl leading-none ml-3 mr-[1px]">•</span>
            <span>{order?.shippingAddress?.phoneNumber}</span>
            </>
            }
          </div>
          <span className="text-sm">{customerAddress && customerAddress}</span>
        </div>
        <div className="flex flex-col gap-1">
            <span className="font-semibold mb-1">Brand Details </span>
            <a href="#" className="-mb-3">
              {order?.items[0]?.brandName && 
              (
                capitalize(order?.items[0]?.brandName)
              )}
            </a>
            {/* <div className="flex items-center gap-0 text-sm text-merseLightText">
              <span>{brandEmail}</span>
              <span className="text-3xl leading-none ml-3 mr-[1px]">•</span>
              <span>{brandPhone}</span>
            </div>
            <span className="text-sm">{brandAddress}</span> */}
        </div>
        <div className="flex flex-col gap-1">
            <span className="font-semibold mb-1">Shipping Method</span>
            <span className="text-sm">{shippingMethod}</span>
        </div>
      </div>
    </div> 
  )
}

export default OrderViewBuyDetailsCard

// customerName={capitalize(order?.shippingAddress?.fullName)}
//               customerEmail={order?.shippingAddress?.email}
//               customerPhone={order?.shippingAddress?.phoneNumber}
//               customerAddress="24B, Kofo Abayomi Street, Victoria Island, Lagos"
//               brandName="Stylish Co"
//               brandEmail="stylish.co@example.com"
//               brandPhone="08077899211"
//               brandAddress="12B, Funke Ayoade Street, Victoria Island, Lagos"
//               shippingMethod="Standard Delivery"