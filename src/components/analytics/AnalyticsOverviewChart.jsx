import { IoInformationCircleOutline } from "react-icons/io5";
import { compactFormatter, formatter } from "../../utils/helpers"
import { FaChevronDown } from "react-icons/fa";
import { RiCalendarLine } from "react-icons/ri";
import { useState }  from "react"
import CustomLineChart from "../globals/CustomLineChart"
import { totalSales, totalOrders, activeBrands, newCustomers, pendingPayouts, completedPayouts } from "../../data/analyticsData";


const AnalyticsOverviewPage = () => {
  const [activeTab, setActiveTab] = useState("Total Sales")
  
  return (
    <>
    <div className="w-full flex flex-col gap-5 mb-4">
      <div className="flex justify-end">
        <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
          <RiCalendarLine />
          <div className="text-sm text-light">Last month</div>
          <FaChevronDown size={10} />
        </div>
      </div>
    </div>
    <div className="w-full px-3 pb-2 border-[1px] border-merseBorder">
      <div className="flex gap-14 text-merseLightText overflow-x-auto">
        <StatusToggle
          title="Total Sales"
          figure={compactFormatter(1200000)}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Total Orders"
          figure={22000}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Active Brands"
          figure={1000}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="New Customers"
          figure={90}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Pending Payout"
          figure={formatter(13000).slice(0, -3)}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Completed Payout"
          figure={formatter(45000).slice(0, -3)}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="w-full h-[400px] mt-4">
        {/* <CustomLineChart data={totalSales} month={"July"} /> */}
        {SetActiveLineChart(activeTab)}
      </div>
    </div>
    </>
  )
}

export default AnalyticsOverviewPage;





const StatusToggle = ({title, figure, percentage, activeTab, setActiveTab}) => {
  const infoIcon = () => {
    return <IoInformationCircleOutline size={15}/>
  }
  return (
    <div 
      onClick={() => setActiveTab(title)}
      className={`w-30 flex flex-col pt-2 text-sm cursor-pointer flex-shrink-0 ${
        activeTab === title ? "text-black border-t-[5px] border-black" : "text-merseLightText"
      }`}
    >
      <span className="flex gap-1 items-center">{title} {infoIcon()}</span>
      <span className="text-xs">
        <span className="font-semibold mr-1 text-sm">{figure}</span>
        {percentage}
      </span>
    </div>
  )
}


const SetActiveLineChart = (activeTab) => {
  if (activeTab === "Total Sales") return <CustomLineChart data={totalSales} month={"July"} />
  if (activeTab === "Total Orders") return <CustomLineChart data={totalOrders} month={"July"} />
  if (activeTab === "Active Brands") return <CustomLineChart data={activeBrands} month={"July"} />
  if (activeTab === "New Customers") return <CustomLineChart data={newCustomers} month={"July"} />
  if (activeTab === "Pending Payout") return <CustomLineChart data={pendingPayouts} month={"July"} />
  if (activeTab === "Completed Payout") return <CustomLineChart data={completedPayouts} month={"July"} />
}