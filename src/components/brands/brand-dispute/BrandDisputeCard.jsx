const BrandDisputeCard = ({ title, figure, percent, icon }) => {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex flex-col justify-between gap-1">
      <div className="flex justify-between">
        <div className="text-merseLightText text-[14px]">{title}</div>
        <div className="">{icon()}</div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <div className="font-medium text-4xl">
          {figure}
        </div>
        <div className="text-merseLightText text-[14px] font-light">
          {percent}%
        </div>
      </div>
    </div>
  );
}

export default BrandDisputeCard