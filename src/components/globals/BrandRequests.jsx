
import { Link } from "react-router-dom";
import { capitalize, dateFormatter } from "../../utils/helpers";
import StatusCheck from "./StatusCheck";

function BrandRequest({ size = "normal", data }) {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex flex-col items-end gap-6">
      <div className="w-full flex justify-between">
        <div className="flex-col gap-3">
          <div className={`font-semibold text-md`}>{capitalize(data?.name)}</div>
          <div className="flex gap-1"> 
            {/* <span className="text-merseLightText text-xs">{product}</span> */}
            <span className="text-merseLightText text-xs">{data?.country}</span>
            {/* <span className="text-merseLightText text-xs">{data?.email}</span> */}
          </div>
        </div>
        <div className="">
          <StatusCheck className="text-sm px-1" value={capitalize(data?.status)}/>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
          <span className="text-sm">{dateFormatter(data?.created_at)}</span>
          <Link to={`/brands/${data?.brand_type?.id}`} className="border-2 px-1 text-[13px]">
            View details
          </Link>
      </div>
    </div>
  );
}

export default BrandRequest;
