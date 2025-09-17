import PayoutCardContainer from "../../components/payouts/PayoutCardContainer";
import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import PayoutTable from "../../components/payouts/PayoutTable";

function DashboardPayoutPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Overview"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        <PayoutCardContainer />
        <PayoutTable />
      </div>
    </div>
  );
}

export default DashboardPayoutPage;
