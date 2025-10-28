import { fetchAllPayouts } from "../../../api"
import { capitalize, formatter } from "../../../utils/helpers"
import StatusCheck from "../../globals/StatusCheck"
import PayoutReviewModal from "./PayoutReviewModal"
import { useEffect, useState } from 'react'

const PayoutDetailCard = ({ payout, mutate }) => {
  const [showModal, setShowModal] = useState(false)
  const [nextDueDate, setNextDueDate] = useState(null)

  const { payouts } = fetchAllPayouts();
  useEffect(() => {
    if (payouts) {
      setNextDueDate(payouts?.summary?.nextDueDate)
    } 
  })

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <span className="font-semibold">Payout Summary</span>
        <div className="flex gap-4">
          <button 
            className="px-3 py-1 bg-black text-white text-sm gap-1"
            onClick={() => {
              setShowModal(true);
              mutate();
            }}
          >
            {
              (payout?.status === "pending" || payout?.status === "hold") ? 
              "Approve Payout" : 
              payout?.status === "approved" ? "Hold Payout" : null 
            }
          </button>
          {/* <button className="px-3 py-1 border-merseBorder border-2 text-black text-sm gap-1">
            Export statement
          </button> */}
        </div>
      </div>
      <div className="bg-gray-200/50 w-full p-4 ">
        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Total Sales</span>
            <span className="text-base">{formatter(payout?.totalSales).slice(0, -3)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Net Amount</span>
            <span className="text-base">{formatter(payout?.netPayment).slice(0, -3)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Completed Orders</span>
            <span className="text-base">{200}</span>
          </div>
          {/* <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Payment method</span>
            <div className="text-base flex flex-col">
              <span>Flutterwave</span>
              <span className="text-merseLightText">******5678</span>
            </div>
          </div> */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Payment Status</span>
            <span className="text-base">
              <StatusCheck value={capitalize(payout?.status)} className="px-2 py-1"/>
            </span>
          </div>
        </div>
      </div>
      <PayoutReviewModal show={showModal} onClose={() => setShowModal(false)} payout={payout} nextDueDate={nextDueDate} mutate={mutate}/>
    </>
  )
}

export default PayoutDetailCard