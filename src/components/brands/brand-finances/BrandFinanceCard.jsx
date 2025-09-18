export const BrandFinanceCard = ({ title, figure, summary, icon, date }) => {
  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex flex-col justify-between gap-1">
      <div className="flex justify-between">
        <div className="text-merseLightText text-[14px]">{title}</div>
        <div className="">{icon()}</div>
      </div>
      <div className="flex flex-col gap-0 items-start">
        <span className="font-semibold text-2xl">
          {figure}
        </span>
        {summary &&
          <span className="text-green-500 text-xs">
            {summary}
          </span>
        }
      </div>
      <div className="w-full flex justify-end">
        <div className="text-merseLightText text-xs font-light">{date}</div>
      </div>
    </div>
  );
}

export const PayoutCardDetails = ({ date, cardNumber, cardProvider }) => {
    return (
      <div className="w-full col-span-1 border-[1px] border-merseBorder pt-3 flex flex-col items-end gap-3">
        <div className="px-3 w-full flex justify-between items-end border-b border-merseBorder pb-3">
          <span className="text-sm font-medium">Next Payout Date</span>
          <span className="text-xs text-merseLightText">{date}</span>
        </div>
        <div className="px-3 w-full h-full pb-3 flex justify-between items-end">
          <div className="flex items-end gap-1">
            <img src="/assets/images/stripe-logo.png" alt="stripe logo" className="w-7" />
            <span className="text-sm font-medium">{cardProvider}</span>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium">{cardNumber}</span>
          </div>
        </div>
      </div>
    )
}



