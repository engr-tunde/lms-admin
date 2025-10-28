import { capitalize } from "../../../../utils/helpers";

const PaymentMethod = ({ method }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-1">Payment Method</div>
      <div className="bg-gray-200/50 w-full p-4 flex flex-col justify-between h-auto">
        <div className="flex flex-col h-full text-merseLightText">
          <span>{capitalize("MasterCard")}</span>
          <span>**********12345</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod;