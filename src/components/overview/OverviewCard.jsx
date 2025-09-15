function OverviewCard({ title, figure, percent, icon, size = "normal" }) {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex flex-col items-end gap-3">
      <div className="w-full flex justify-between items-start">
        <div className="flex flex-col gap-5">
          <div className="text-merseLightText text-[14px]">{title}</div>
          <div className="flex flex-row gap-3 items-center">
            <div
              className={`font-medium ${
                size === "sm" ? "text-lg" : "text-2xl"
              }`}
            >
              {figure}
            </div>
            <div className="text-merseLightText text-[14px] font-light">
              {percent}%
            </div>
          </div>
        </div>
        {icon()}
      </div>
      <div className="text-merseLightText text-[14px] font-light">
        Updated a min ago
      </div>
    </div>
  );
}

export default OverviewCard;
