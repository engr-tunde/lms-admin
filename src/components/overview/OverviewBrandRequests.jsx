
import StatusCheck from "./OverviewStatusCheck";

function OverviewBrandRequest({ title, product, country, email, status, date, size = "normal" }) {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex flex-col items-end gap-6">
      <div className="w-full flex justify-between">
        <div className="flex-col gap-3">
          <div className={`font-semibold text-md`}>{title}</div>
          <div className="flex gap-1"> 
            <span className="text-merseLightText text-xs">{product}</span>
            <span className="text-merseLightText text-xs">{country}</span>
            <span className="text-merseLightText text-xs">{email}</span>
          </div>
        </div>
        <div className="">
          <StatusCheck className="text-sm px-1" value={status}/>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
          <span className="text-sm">{date}</span>
          <span className="border-2 px-1 text-[13px]">View details</span>
      </div>
    </div>
  );
}

export default OverviewBrandRequest;
