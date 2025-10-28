import { capitalize } from "../../../../utils/helpers";

const ShippingAddress = ({ address }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-1">Shipping Address</div>
      <div className="bg-gray-200/50 w-full p-4 flex flex-col justify-between h-auto">
        <div className="flex flex-col h-full">
          <span className="text-merseLightText">Address</span>
          <span className="text-sm font-semibold">{capitalize(address)}</span>
        </div>
      </div>
    </div>
  )
}

export default ShippingAddress;