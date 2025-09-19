import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import MemberTable from "../../components/members/MemberTable.jsx";

function DashboardMembersPage() {
  return (
    <div className="flex flex-col gap-0">
      <DashboardNavBar
        title="Members"
        subtitle="Manage and search members with ease."
      />
      <div className="flex justify-end">
        <button className="text-white bg-black px-3 py-2 cursor-pointer">
          Add members
        </button>
      </div>
      <div className="my-5">
        <h2 className="text-xl">Roles and their responsibilities</h2>
        <p>
          <span className="font-semibold">Operations Manager</span> manages
          order fulfilment, warehouse receipts, and customer service issues.
        </p>
        <p>
          <span className="font-semibold">Finance Manager</span> manages brand
          payouts, refunds, reconciliations, and financial reporting.
        </p>
        <p>
          <span className="font-semibold">Brand Manager</span> onboards and
          verifies brands while monitoring compliance and managing product
          listings
        </p>
      </div>
      <div className="w-full flex flex-col gap-8">
        <MemberTable />
      </div>
    </div>
  );
}

export default DashboardMembersPage;
