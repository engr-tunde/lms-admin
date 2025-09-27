import { FaChevronDown } from "react-icons/fa";
import { deliverySummary } from "../../data/analyticsData";
import CustomPieChart from "../globals/CustomPieChart"
import { RiCalendarLine } from "react-icons/ri";

const AnalyticsSummaryChart = () => {
  return (
    <div className="w-full p-3 border-[1px] border-merseBorder h-[400px] flex flex-col justify-between">
      <div className="w-full flex justify-between gap-5 mb-4">
          <div>Delivery Summary</div>
        <div className="flex">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div>
      <CustomPieChart data={deliverySummary} title="Total Orders" />
    </div>
  )
}

export default AnalyticsSummaryChart;