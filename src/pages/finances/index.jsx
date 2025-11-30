import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { CheckIcon, ClockIcon, DollarIcon, PlusIcon, TrendingUpIcon } from "../../components/globals/Icons";
import ManageFinances from "../../components/finances";
import DashboardStats from "../../components/globals/DashboardStats";


const DashboardFinancesPage = () => {

  const financeStats = [
    { label: "Total Earnings", value: "$12450", icon: DollarIcon, color: "emerald" },
    { label: "Pending Payouts", value: "$3200", icon: ClockIcon, color: "amber" },
    { label: "This Month", value: "$4500", icon: TrendingUpIcon, color: "blue" },
    { label: "Last Payout", value: "$2800", icon: CheckIcon, color: "purple" },
  ];


  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Manage Payment"
          subtitle="Manage your payment details to receive course earnings"
        />
        <div>
          <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Request Payout
          </button>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="mx-auto p-6">
          <DashboardStats 
            stats={financeStats}
          />
          <ManageFinances />
        </div>
      </div>
    </div>
  )
}

export default DashboardFinancesPage;





