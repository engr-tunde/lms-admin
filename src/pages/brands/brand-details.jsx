import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import BrandsOverviewPage from "../../components/brands/brand-overview";
import ProductBrandsPage from "../../components/brands/brand-products";
import BrandsOrderPage from "../../components/brands/brand-order";
import BrandFinancePage from "../../components/brands/brand-finances";
import BrandDisputePage from "../../components/brands/brand-dispute";
import BrandsCompliancePage from "../../components/brands/brand-compliance";
import StatusCheck from "../../components/globals/StatusCheck"
import { useParams } from "react-router-dom"
import { useState } from "react";
import { activateDeactivateBrand, fetchBrand } from "../../api";
import { capitalize, errorNotification, successNotification } from "../../utils/helpers";

function DashboardBrandDetailsPage() {
  const [activeTab, setActiveTab] = useState("Brand overview");
  const [buttonOpen, setButtonOpen] = useState(false);
  const { id } = useParams();
  const brandId = id;

  const { brand, mutate } = fetchBrand(brandId);
  console.log("brand overview", brand);

  const ellipsisIcon = (size) => {
    return <IoEllipsisHorizontalSharp size={size} />;
  };

  const handleActivateDeactivateBrand = async (id, action) => {
      try {
        const response = await activateDeactivateBrand({ action }, id);
        console.log("response", response);
        if (response.status.toString().includes("20")) {
          successNotification(response.data.message || "Action successful");
          mutate();
          close();
        } else {
          errorNotification(response?.data?.message || "Action failed");
        }
      } finally {
        close();
      }
    };

  return (
    <div 
      className="flex flex-col gap-6"
      onClick={() => setButtonOpen(false)}
    >
      <div className="flex justify-between items-end">
        <DashboardNavBar
          path="Brand details"
          title={brand ? capitalize(brand?.name) : ""}
          subtitle={brand ? (brand?.description.length > 200 ? brand?.description.slice(0, 200) + "..." : brand?.description) : "See how your brand is performing today across sales, orders & top products."}
        />
        <div className="flex gap-1 relative">
          <StatusCheck value={capitalize(brand?.status)} className="text-sm px-2 py-1"/>
          <button 
            className="border-2 px-2 text-black"
            onClick={(e) => {e.stopPropagation(); setButtonOpen(!buttonOpen)}}
          >
            {ellipsisIcon(10)}
          </button>
          {buttonOpen && (
            <div 
              className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col right-0 top-8 bg-white shadow-xl border-[1px]"
            >
              {
                (brand?.status === "pending") || (brand?.status === "active") ? 
                (
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() => handleActivateDeactivateBrand(brandId, "deactivate")}
                >
                  Deactivate
                </button>

                ) : null
              }
              {
                (brand?.status === "pending") || (brand?.status === "inactive") ? 
                (
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() => handleActivateDeactivateBrand(brandId, "activate")}
                >
                  Activate
                </button>

                ) : null
              }
            </div>
          )}          
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
        {SetActivePage(activeTab, brandId)}
      </div>
    </div>
  );
}

export default DashboardBrandDetailsPage;

const SetActivePage = (activeTab, brandId) => {
  if (activeTab === "Brand overview") return <BrandsOverviewPage brandId={brandId} />;
  if (activeTab === "Products") return <ProductBrandsPage brandId={brandId} />;
  if (activeTab === "Orders") return <BrandsOrderPage brandId={brandId} />;
  if (activeTab === "Finances") return <BrandFinancePage brandId={brandId} />;
  if (activeTab === "Dispute") return <BrandDisputePage brandId={brandId} />;
  if (activeTab === "Compliance & Verification") return <BrandsCompliancePage brandId={brandId} />;
};
