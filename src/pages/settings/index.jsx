import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import CollectionsSettingsTable from "../../components/settings/settings-collections";
import SubcategorySettingsTable from "../../components/settings/settings-subcategory"
import CategorySettingsTable from "../../components/settings/settings-category";
import BrandSettingsTable from "../../components/settings/settings-brands";
import { useState } from "react";

function DashboardSettingsPage() {
  
  const [activeTab, setActiveTab] = useState("brandType")
  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Settings"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="flex gap-3">
        <button 
          onClick={() => setActiveTab("brandType")}
          className={`pr-3 py-1 rounded ${
              activeTab === "brandType" ? "text-black" : "text-merseBorder"
          }`}
          >
              Brand Type
        </button>
        <button 
          onClick={() => setActiveTab("categories")}
          className={`pr-3 py-1 rounded ${
              activeTab === "categories" ? "text-black" : "text-merseBorder"
          }`}
          >
              Categories
        </button>
        <button 
          onClick={() => setActiveTab("subcategories")}
          className={`pr-3 py-1 rounded ${
              activeTab === "subcategories" ? "text-black" : "text-merseBorder"
          }`}
          >
              Sub categories
        </button>
        <button 
          onClick={() => setActiveTab("collections")}
          className={`pr-3 py-1 rounded ${
              activeTab === "collections" ? "text-black" : "text-merseBorder"
          }`}
          >
              Collections
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
        {renderActivePage(activeTab)}
      </div>
    </div>
  );
}


const renderActivePage = (activeTab) => {
  switch (activeTab) {
    case "brandType":
      return <BrandSettingsTable />;
    case "categories":
      return <CategorySettingsTable />;
    case "subcategories":
      return <SubcategorySettingsTable />;
    case "collections":
      return <CollectionsSettingsTable />;
    default:
      return null;
  }
};






export default DashboardSettingsPage;
