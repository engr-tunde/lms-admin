import { FaChevronUp } from "react-icons/fa"

const OrderViewSummaryCard = ({orderSummary, totalOrderValue, discountSum, shippingPaidByBuyer, platformCommission, totalPayout}) => {
  return (
    <div className="flex gap-6 border-2 p-5 w-full lg:w-1/2">
      <div className="flex flex-col gap-1 flex-1 text-md">
        <div className="flex justify-between mb-3 font-semibold">
          Order Summary
        </div>
        <div className="flex justify-between">
          <span>Total Order value</span>
          <span>{totalOrderValue}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount applied(-12%)</span>
          <span>{discountSum}</span>
        </div>
        <div className="flex justify-between text-merseBorder">
          <span>Shipping paid by buyer</span>
          <span>{shippingPaidByBuyer}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform commission(10%)</span>
          <span>{platformCommission}</span>
        </div>
        <div className="flex justify-between mt-2 border-t border-merseBorder pt-2">
          <span>Your total payout</span>
          <span>{totalPayout}</span>
        </div>
    </div>
      <div>
        <button>
          <FaChevronUp/>
        </button>
      </div>
    </div>
  )
}


export default OrderViewSummaryCard