import { formatter } from "../../../utils/helpers";
import NoDataPage from "../../globals/NoDataPage";

const SummaryCard = ({ summary }) => {
  if (!summary) return <NoDataPage message="No summary data available." />;
  
  return (
     <div className="flex flex-col gap-2">
       <div className="font-semibold">Summary</div>
       <div className="bg-gray-100/50 w-full p-4 flex justify-between h-[130px]">
         <div className="flex flex-col gap-2">
           <span className="font-semibold text-merseLightText text-left">Total Order</span>
           <span className="text-sm font-semibold text-left">{summary?.totalOrders}</span>
         </div>
         <div className="flex flex-col gap-2">
           <span className="font-semibold text-merseLightText text-right">Total amount spent</span>
           <span className="text-sm font-semibold text-right">{formatter(summary?.totalSpent)}</span>
         </div>
         {/* <div className="flex flex-col gap-2">
           <span className="font-semibold text-merseLightText text-right">AOV</span>
           <span className="text-sm font-semibold text-right">{formatter(2114.08)}</span>
         </div> */}
       </div>
     </div>
  )
}

export default SummaryCard;