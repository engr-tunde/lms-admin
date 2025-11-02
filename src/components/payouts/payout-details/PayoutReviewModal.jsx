import { IoMdClose }from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai"
import {capitalize, dateFormatter, errorNotification, formatter, successNotification} from "../../../utils/helpers"
import { updatePayout } from "../../../api";


const PayoutReviewModal = ({ show, onClose, payout, nextDueDate, mutate }) => {
  if (!show) return null;

  const handleUpdatePayout = async (id, status) => {
    try {
      const response = await updatePayout(id, { status });
      if (response.status.toString().includes("20")) {
        successNotification(response.data.message);
        mutate()
      } else {
        errorNotification(response?.data?.message);
      }
    } finally {
      close()
    }
  }
  

  const noticeIcon = () => {
    return <AiOutlineInfoCircle size={20}/>
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-[70%] lg:w-1/2 flex flex-col gap-4">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Payout Review</span>
          <span className="text-sm text-merseLightText">Please, review the payment details before confirming payout</span>
        </div>
        <div className="bg-gray-200/50 px-4 py-2">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>Payout ID</span>
              <span>PO-{payout?._id?.slice(-5)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Brand</span>
              <span>{capitalize(payout?.brand?.name)}</span>
            </div>
            {/* <div className="flex justify-between text-sm">
              <span>Payment Method</span>
              <span>Flutterwave(*****12345)</span>
            </div> */}
            <div className="flex justify-between text-sm">
              <span>Due Date</span>
              <span>{dateFormatter(nextDueDate)}</span>
            </div>
          </div>
          <hr className="border-b-2 border-merseBorder my-5"/>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span>Total Orders</span>
              <span>{payout?.orders?.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total Sales</span>
              <span>{formatter(payout?.totalSales)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Commission</span>
              <span className="text-red-500">{formatter(`-${payout?.commission}`)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Net Payout</span>
              <span>{formatter(payout?.netPayment)}</span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-200/50 border-2 border-orange-500 p-3">
          <div className="flex text-orange-500">
            <span>{noticeIcon()}</span>
            <div className="ml-2 flex flex-col gap-1">
              <span className="font-semibold">Important</span>
              <span className="text-sm">
                Once approved, this payout will be processed and cannot be cancelled. please ensure details are correct
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button 
            className="px-3 text-sm border-merseBorder border-2" 
            onClick={onClose}
          >
            Cancel
          </button>
          {
            payout?.status === "pending" && (
              <>
              <button
                className="px-3 py-1 text-white bg-black text-sm"
                onClick={() => handleUpdatePayout(payout?._id, "approved")}
              >
                Confirm Payout
              </button>
              <button
                className="px-3 py-1 text-white bg-black text-sm"
                onClick={() => handleUpdatePayout(payout?._id, "hold")}
              >
                Hold Payout
              </button>
              </>
            )
          }
          {
            payout?.status === "approved" && (
              <button
                className="px-3 py-1 text-white bg-black text-sm"
                onClick={() => handleUpdatePayout(payout?._id, "hold")}
              >
                Hold Payout
              </button>
            )
          }
          {
            payout?.status === "hold" && (
              <button
                className="px-3 py-1 text-white bg-black text-sm"
                onClick={() => handleUpdatePayout(payout?._id, "approved")}
              >
                Approve Payout
              </button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default PayoutReviewModal