import { capitalize, toSentence } from "../../../utils/helpers"
import StatusCheck from "../../globals/StatusCheck"

const OrderDisputeViewStatusCard = ({ disputeData, issueType, customerName, customerEmail, brandName, brandEmail, urgencyLevel, preferredAction }) => {
  return (
    <div className="bg-gray-200/50 w-full p-4 ">
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Issue Type</span>
          <span className="text-base">{toSentence(disputeData?.disputeType)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Customer</span>
          <div className="text-base flex flex-col">
            <span>{capitalize(disputeData?.customer?.fullName)}</span>
            <span className="text-merseLightText">{disputeData?.customer?.email}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Brand</span>
          <div className="text-base flex flex-col">
            <span>{capitalize(disputeData?.brand?.name)}</span>
            {/* <span className="text-merseLightText">{brandEmail}</span> */}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Urgency Level</span>
          <span className="text-base px-3 py-1 flex justify-center">
            <StatusCheck value={capitalize(disputeData?.urgency)} className="text-sm px-2 py-1"/>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-base">Preferred Action</span>
          <span className="text-base">{toSentence(disputeData?.preferredAction)}</span>
        </div>
        </div>
    </div>
  )
}

export default OrderDisputeViewStatusCard