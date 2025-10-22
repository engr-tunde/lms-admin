import { Link } from "react-router-dom";
import { capitalize, compactDateFormatter, dateFormatter } from "../../../utils/helpers";
import StatusCheck from "../../globals/StatusCheck";

function BrandRequestsCard({ request }) {

  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex flex-col items-end gap-6">
      <div className="w-full flex justify-between">
        <div className="flex-col gap-3">
          <div className={`font-semibold text-md`}>{capitalize(request?.name)}</div>
          <div className="flex gap-1"> 
            <span className="text-merseLightText text-xs">{capitalize(request?.brand_type?.name)}</span>
            <span className="text-merseLightText text-xs">{request?.country}</span>
            <span className="text-merseLightText text-xs">{request?.email}</span>
          </div>
        </div>
        <div className="">
          <StatusCheck className="text-sm px-1" value={capitalize(request?.status)}/>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
          <span className="text-sm">{compactDateFormatter(request?.created_at)}</span>
          <Link to={`/brands/${request?._id}?tab=compliance`} className="border-2 px-1 text-[13px]">
            View details
          </Link>
      </div>
    </div>
  );
}

export default BrandRequestsCard;