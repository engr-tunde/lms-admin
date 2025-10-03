import {formatter} from "../../../utils/helpers"

const ProductViewFinancialBreakdown = ({ pricing }) => {
  const discountPct = pricing?.discountPct 
  const sellingPrice = pricing?.sellingPrice
  const commissionPct = pricing?.commissionPct
  const netPrice = sellingPrice * (1 - discountPct/100) * (1 - commissionPct/100)
  return (
    <div className="border-[1px] border-merseBorder p-3 flex flex-col gap-2">
      <span className="font-semibold text-sm">Financial Breakdown</span>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Discount</span>
          <span className="text-sm">{`${discountPct}%` || "N/A"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Selling price</span>
          <span className="text-sm">{formatter(sellingPrice) || "N/A"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Net price</span>
          <span className="text-sm">{formatter(netPrice) || "N/A"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-merseLightText">Commission</span>
          <span className="text-sm">{`${commissionPct}%` || "N/A"}</span>
        </div>
        
      </div>
    </div>
  )
}


export default ProductViewFinancialBreakdown