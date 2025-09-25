import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import BrandsOverviewPage from "../../components/brands/brand-overview";
import ProductBrandsPage from "../../components/brands/brand-products";
import BrandsOrderPage from "../../components/brands/brand-order";
import BrandFinancePage from "../../components/brands/brand-finances";
import BrandDisputePage from "../../components/brands/brand-dispute";
import BrandsCompliancePage from "../../components/brands/brand-compliance";
import StatusCheck from "../../components/globals/StatusCheck"
import { useState } from "react";

function DashboardBrandDetailsPage() {
  const [activeTab, setActiveTab] = useState("Brand overview");
  const ellipsisIcon = (size) => {
    return <IoEllipsisHorizontalSharp size={size} />;
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          path="Brand details"
          title="StylistCo"
          subtitle="See how your brand is performing today across sales, orders & top products."
        />
        <div className="flex gap-1">
          {activeTab !== "Compliance & Verification" ? (
            <button className="px-4 text-white bg-green-500 text-sm font-semibold">
              Active
            </button>
          ) : (
            <StatusCheck value={"Pending"} className="text-xs font-semibold px-2 py-1"/>
          )}
          <button className="border-2 px-2 text-black">
            {ellipsisIcon(10)}
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("Brand overview")}
            className={`pr-3 py-1 rounded ${
              activeTab === "Brand overview" ? "text-black" : "text-merseBorder"
            }`}
          >
            Brand overview
          </button>
          <button
            onClick={() => setActiveTab("Products")}
            className={`pr-3 py-1 rounded ${
              activeTab === "Products" ? "text-black" : "text-merseBorder"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("Orders")}
            className={`pr-3 py-1 rounded ${
              activeTab === "Orders" ? "text-black" : "text-merseBorder"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("Compliance & Verification")}
            className={`pr-3 py-1 rounded ${
              activeTab === "Compliance & Verification"
                ? "text-black"
                : "text-merseBorder"
            }`}
          >
            Compliance & Verification
          </button>
          <button
            onClick={() => setActiveTab("Finances")}
            className={`pr-3 py-1 rounded ${
              activeTab === "Finances" ? "text-black" : "text-merseBorder"
            }`}
          >
            Finances
          </button>
          <button
            onClick={() => setActiveTab("Dispute")}
            className={`pr-3 py-1 rounded ${
              activeTab === "Dispute" ? "text-black" : "text-merseBorder"
            }`}
          >
            Dispute
          </button>
        </div>
        {SetActivePage(activeTab)}
      </div>
    </div>
  );
}

export default DashboardBrandDetailsPage;

const SetActivePage = (activeTab) => {
  if (activeTab === "Brand overview") return <BrandsOverviewPage />;
  if (activeTab === "Products") return <ProductBrandsPage />;
  if (activeTab === "Orders") return <BrandsOrderPage />;
  if (activeTab === "Finances") return <BrandFinancePage />;
  if (activeTab === "Dispute") return <BrandDisputePage />;
  if (activeTab === "Compliance & Verification")
    return <BrandsCompliancePage />;
};
