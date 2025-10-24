import { IoInformationCircleOutline } from "react-icons/io5";
import { compactFormatter, formatter } from "../../utils/helpers"
import { FaChevronDown } from "react-icons/fa";
import { RiCalendarLine } from "react-icons/ri";
import { useEffect, useState }  from "react"
import CustomLineChart from "../globals/CustomLineChart"
import { totalSales, totalOrders, activeBrands, newCustomers, pendingPayouts, completedPayouts } from "../../data/analyticsData";
import { fetchAnalytics } from "../../api";
import Loader from "../globals/Loader";
import ErrorWidget from "../globals/ErrorWidget";
import { set } from "zod/v4";


const AnalyticsOverviewPage = () => {
  const { analytics, analyticsLoading, analyticsError } = fetchAnalytics();
  const [activeTab, setActiveTab] = useState("Total Sales")
  const [salesGraph, setsalesGraph] = useState(null);
  const [customerGraph, setcustomerGraph] = useState(null);
  const [orderGraph, setorderGraph] = useState(null)
  const [brandGraph, setbrandGraph] = useState(null)
  const [pendingPayoutGraph, setpendingPayoutGraph] = useState(null);
  const [completedPayoutGraph, setcompletedPayoutGraph] = useState(null);


  useEffect(() => {
    if (analytics?.graphs) {
      setsalesGraph(analytics?.graphs?.salesGraph)
      setcustomerGraph(analytics?.graphs?.customersGraph)
      setorderGraph(analytics?.graphs?.ordersGraph)
      setbrandGraph(analytics?.graphs?.brandsGraph)
      setpendingPayoutGraph(analytics?.graphs?.pendingPayoutGraph)
      setcompletedPayoutGraph(analytics?.graphs?.completedPayoutGraph)
    }
  }, [analytics])

  if (analyticsLoading) return <Loader />;
  if (analyticsError) return <ErrorWidget error={analyticsError} />;
  if (!analytics) return <div>No order analytics found</div>;

  console.log("analytics", analytics)
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
          figure={compactFormatter(analytics?.totalSales)}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Total Orders"
          figure={analytics?.totalOrders}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Active Brands"
          figure={analytics?.activeBrands}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="New Customers"
          figure={analytics?.newCustomers}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Pending Payout"
          figure={formatter(analytics?.pendingPayout).slice(0, -3)}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <StatusToggle
          title="Completed Payout"
          figure={formatter(analytics?.completedPayout).slice(0, -3)}
          percentage={"+3.3%"}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="w-full h-[400px] mt-4">
        { analytics?.graphs.length === 0 &&
          <NoDataPage message={"No graph data available yet"}/>
        }
        {SetActiveLineChart(activeTab, salesGraph, customerGraph, orderGraph, brandGraph, pendingPayoutGraph, completedPayoutGraph)}
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

function SetActiveLineChart(
  activeTab, 
  salesGraph,
  customerGraph, 
  orderGraph, 
  brandGraph, 
  pendingPayoutGraph, 
  completedPayoutGraph
) {
  let data;

  switch (activeTab) {
    case "Total Sales":
      data = salesGraph?.length > 1 ? salesGraph : totalSales;
      break;
    case "Total Orders":
      data = orderGraph?.length > 1 ? orderGraph : totalOrders;
      break;
    case "Active Brands":
      data = brandGraph?.length > 1 ? brandGraph : activeBrands;
      break;
    case "New Customers":
      data = customerGraph?.length > 1 ? customerGraph : newCustomers;
      break;
    case "Pending Payout":
      data = pendingPayoutGraph?.length > 1 ? pendingPayoutGraph : pendingPayouts;
      break;
    case "Completed Payout":
      data = completedPayoutGraph?.length > 1 ? completedPayoutGraph : completedPayouts;
      break;
    default:
      data = [];
      break;
  }

  return <CustomLineChart data={data} month="July" />;
};
