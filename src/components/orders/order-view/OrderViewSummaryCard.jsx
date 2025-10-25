import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa"
import { formatter } from "../../../utils/helpers";

const OrderViewSummaryCard = ({order}) => {
  const [showModal, setShowModal] = useState(true);
  const [discountPercent, setdiscountPercent] = useState()
  const [totalPayout, settotalPayout] = useState()

  useEffect(() => {
    if (order?.discountApplied) {
      setdiscountPercent((order?.discountApplied / order?.totalAmount) * 100);
    }
  }, [order?.discountApplied])

  useEffect(() => {
    if (!order) return;
    settotalPayout(
      (order.totalAmount || 0) -
      (order?.discountApplied || 0) -
      (order.shippingPaidByUser || 0) -
      (order.platformCommission || 0)
    );
  }, [order])

  return (
    <div className="border-2 p-5 w-full lg:w-1/2 relative">
      <div className="flex justify-between mb-3 font-semibold">
        Order Summary
      </div>
      <div className={`flex flex-col gap-1 flex-1 text-md ${!showModal ? "hidden" : "flex"}`}>
        <div className="flex justify-between">
          <span>Total Order value</span>
          <span>{formatter(order?.totalAmount)}</span>
        </div>
        { order?.discountApplied > 0 && (
          <div className="flex justify-between">
            <span>{`Discount applied(${discountPercent?.toFixed(1)}%)`}</span>
            <span>{formatter(order?.discountApplied)}</span>
          </div>)
        }
        <div 
          className={`flex justify-between text-merseBorder
            ${order?.shippingPaidByUser === 0 ? "text-merseBorder" : "text-black"
          }`}
        >
          <span>Shipping paid by buyer</span>
          <span>{order?.shippingPaidByUser}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform commission(10%)</span>
          <span>{formatter(order?.platformCommission)}</span>
        </div>
        <div className="flex justify-between mt-2 border-t border-merseBorder pt-2">
          <span>Your total payout</span>
          <span>{formatter(totalPayout)}</span>
        </div>
      </div>
      <div className="absolute top-5 right-5">
        <button
          onClick={() => setShowModal(!showModal)}
        >
          <FaChevronUp className={`${showModal ? "rotate-180 transition-transform" : "transition-transform"}`}/>
        </button>
      </div>
    </div>
  )
}


export default OrderViewSummaryCard