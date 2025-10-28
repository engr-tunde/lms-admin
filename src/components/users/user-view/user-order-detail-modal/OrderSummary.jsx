import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa"
import { formatter } from "../../../../utils/helpers";

const OrderSummary = ({ order }) => {
  const [showModal, setShowModal] = useState(true);
  const [discountPercent, setdiscountPercent] = useState()
  const [subTotal, setsubtotal] = useState()
  const [total, settotal] = useState()

  useEffect(() => {
    if (order) {
      setdiscountPercent((order?.discountApplied / order?.totalAmount) * 100);
      setsubtotal(order?.totalAmount - order?.shippingPaidByUser - order?.platformCommission);
    }
  }, [order?.discountApplied])

  useEffect(() => {
    if (!order) return;
    settotal(
      (order.totalAmount || 0) -
      (order?.discountApplied || 0) -
      (order?.shippingPaidByUser || 0) -
      (order?.platformCommission || 0) - 
      (order?.tax || 0)
    );
  }, [order])

  return (
    <div className="border-2 p-5 w-full relative">
      <div className="flex justify-between mb-3 font-semibold">
        Order Summary
      </div>
      <div className={`flex flex-col gap-1 flex-1 text-md ${!showModal ? "hidden" : "flex"}`}>
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>{formatter(subTotal)}</span>
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
          <span>Shipping Fee</span>
          <span>{order?.shippingPaidByUser}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatter(order?.tax || 0)}</span>
        </div>
        <div className="flex justify-between mt-2 border-t border-merseBorder pt-2">
          <span>Total</span>
          <span>{formatter(total)}</span>
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


export default OrderSummary