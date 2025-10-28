import { FaChevronRight } from "react-icons/fa";
import StatusCheck from "../../globals/StatusCheck";
import { fetchAllDisputes } from "../../../api";
import { compactDateFormatter, toSentence } from "../../../utils/helpers";
import NoDataPage from "../../globals/NoDataPage";

const DisputeHistoryCard = ({ userDisputes }) => {
  // const { disputes } = fetchAllDisputes("order");
  console.log("dispute data", userDisputes);

  if (!userDisputes?.length) return <NoDataPage message="No dispute history available." />;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between">
        <span className="font-semibold ">Dispute History</span>
      </div>
      <div className="flex flex-col bg-gray-100/50 p-4 gap-4">
      {
        userDisputes?.map((dispute) => (
          <DisputeHistory key={dispute?._id} dispute={dispute}/>
        ))
      }
      </div>
    </div>
  )
}

export default DisputeHistoryCard;

const DisputeHistory = ({ dispute }) => {
  return (
    <>
    <div className="w-full flex justify-between gap-1">
      <div className="flex flex-col gap-2">
        <div className="font-semibold">#DS {dispute?._id.slice(-5)}</div>
        <div className="">{toSentence(dispute?.disputeType)}</div>
      </div>
      <div className="flex flex-col -gap-1 text-sm">
        <StatusCheck value={toSentence(dispute?.status)} className="px-3 py-1"/>
        <div className="font-semibold">ORD-{dispute?.order?.slice(-5)}</div>
        <div className="text-merseLightText">{compactDateFormatter(dispute?.createdAt)}</div>
      </div>
    </div>
    </>
  )
}