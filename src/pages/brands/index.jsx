import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandsOrderCardContainer from "../../components/brands/brand-order/BrandsOrderCardContainer";
import AddedProductBrandsCardContainer from "../../components/brands/brand-overview/AddedProductBrandsCardContainer";
import AllBrandsTable from "../../components/brands/AllBrandsTable";
import { fetchBrands, fetchProductByBrand } from "../../api";
import BrandRequestContainer from "../../components/globals/BrandRequestContainer";

function DashboardBrandsPage() {
  const { brands, brandsLoading, brandsError } = fetchBrands();
  console.log("brands ss", brands);
  
  // const newlyAddedBrands = () => {
  //   if (!brands?.brands) return [];
  //   const sorted = [...brands.brands].sort(
  //     (a, b) => new Date(b.created_at) - new Date(a.created_at)
  //   );
  //   return sorted.slice(0, 3);
  // };

  const newlyAddedBrands = () => {
    let allBrands = brands?.brands

    if (!allBrands) return [];
    const pendingBrands = allBrands.filter(brand => brand.status === "pending");
    if (pendingBrands.length > 0) {
        allBrands = pendingBrands
    };
    const sorted = [...allBrands].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    return sorted.slice(0, 3);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Brands"
          subtitle="See how your brand is performing today across sales, orders & top products."
        />
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div>
      <BrandsOrderCardContainer />
      <BrandRequestContainer brandsData={newlyAddedBrands()} />
      <AllBrandsTable brandsData={brands?.brands} />
    </div>
  );
}

export default DashboardBrandsPage;
