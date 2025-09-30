import {formatter} from "../../../utils/helpers"

const ProductViewFinancialBreakdown = () => {
  return (
    <div className="border-[1px] border-merseBorder p-3 flex flex-col gap-2">
      <span className="font-semibold text-sm">Financial Breakdown</span>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Discount</span>
          <span className="text-sm">{"N/A"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Selling price</span>
          <span className="text-sm">{formatter(140000)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Net price</span>
          <span className="text-sm">{formatter(120000)}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Commission</span>
          <span className="text-sm">{"2%"}</span>
        </div>
        
      </div>
    </div>
  )
}


export default ProductViewFinancialBreakdown