import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import SubcategorySettingsTable from "../../components/settings/SubcategorySettingsTable"
import CategorySettingsTable from "../../components/settings/CategorySettingsTable";
import BrandSettingsTable from "../../components/settings/BrandSettingsTable";
import { useState } from "react";

function DashboardSettingsPage() {
    const [activeTab, setActiveTab] = useState("Brand type")

  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Settings"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="flex gap-3">
        <button 
          onClick={() => setActiveTab("Brand type")}
          className={`pr-3 py-1 rounded ${
              activeTab === "Brand type" ? "text-black" : "text-merseBorder"
          }`}
          >
              Brand type
        </button>
        <button 
          onClick={() => setActiveTab("Categories")}
          className={`pr-3 py-1 rounded ${
              activeTab === "Categories" ? "text-black" : "text-merseBorder"
          }`}
          >
              Categories
        </button>
        <button 
          onClick={() => setActiveTab("Sub categories")}
          className={`pr-3 py-1 rounded ${
              activeTab === "Sub categories" ? "text-black" : "text-merseBorder"
          }`}
          >
              Sub categories
        </button>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        {activeTab === "Brand type" ? (
            <BrandSettingsTable />
        ) : activeTab === "Categories" ? 
        (<CategorySettingsTable/>) : 
        (<SubcategorySettingsTable/>)}
      </div>
    </div>
  );
}

export default DashboardSettingsPage;
