import { compactFormatter } from "../../../utils/helpers"

const PayoutDisputeViewStatusCard = ({ disputeData }) => {
  return (
    <div className="bg-gray-200/50 w-full p-4 ">
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Issue Type</span>
          <span className="text-base">{disputeData?.disputeType}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Brand</span>
          <div className="text-base flex flex-col">
            <span>{disputeData?.brand?.name}</span>
            <span className="text-merseLightText">{disputeData?.brand?.email || ""}</span>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Payout method</span>
          <div className="text-base flex flex-col">
            <span>{payoutMethod}</span>
            <span className="text-merseLightText">{paidTo}</span>
          </div>
        </div> */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Sales month</span>
          <span className="text-base">{compactFormatter(disputeData?.payout?.createdAt)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Payout Date</span>
          <span className="text-base">{compactFormatter(disputeData?.payout?.nextDueDate)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Disputed On</span>
          <span className="text-base">{compactFormatter(disputeData?.createdAt)}</span>
        </div>
        </div>
    </div>
  )
}

export default PayoutDisputeViewStatusCard