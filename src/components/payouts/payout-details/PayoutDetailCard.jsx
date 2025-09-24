import PayoutStatusCheck from "../PayoutStatusCheck"

const PayoutDetailCard = ({ totalSales, netAmount, completedOrder, paymentMethod, paidTo, paymentStatus }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <span className="font-semibold">Payout Summary</span>
        <div className="flex gap-4">
          <button className="px-3 py-1 bg-black text-white text-sm gap-1">
            Approve payout
          </button>
          <button className="px-3 py-1 border-merseBorder border-2 text-black text-sm gap-1">
            Export statement
          </button>
        </div>
      </div>
      <div className="bg-gray-200/50 w-full p-4 ">
        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Total Sales</span>
            <span className="text-base">{totalSales}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Net Amount</span>
            <span className="text-base">{netAmount}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Completed Orders</span>
            <span className="text-base">{completedOrder}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Payment method</span>
            <div className="text-base flex flex-col">
              <span>{paymentMethod}</span>
              <span className="text-merseLightText">{paidTo}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-base">Payment Status</span>
            <span className="text-base">
              <PayoutStatusCheck value={paymentStatus} className="px-2 py-1"/>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayoutDetailCard