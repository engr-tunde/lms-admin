import { capitalize, compactDateFormatter } from "../../../utils/helpers";
import NoDataPage from "../../globals/NoDataPage";
import StatusCheck from "../../globals/StatusCheck";

const BasicInfoCard = ({ info, userDetail }) => {
  if (!info && !userDetail) return <NoDataPage message="No basic information available." />;
  
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold">Basic Information</div>
      <div className="bg-gray-100/50 w-full p-4 flex justify-between h-[130px]">
        <div className="flex flex-col h-full">
          <span className="font-semibold text-lg">{capitalize(info?.fullName || userDetail?.fullName)}</span>
          <span className="text-sm font-semibold text-merseLightText">{info?.email || userDetail?.email}</span>
          <span className="text-sm font-semibold text-merseLightText">{info?.phoneNumber}</span>
        </div>
        <div className="flex flex-col items-end h-full justify-between">
          <StatusCheck value={capitalize(userDetail?.status)} className="text-sm px-3 py-1" />
          <div className="flex flex-col -gap-1 text-right text-sm text-merseLightText">
            <span className="font-semibold">Date Joined</span>
            <span>{compactDateFormatter(userDetail?.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfoCard;