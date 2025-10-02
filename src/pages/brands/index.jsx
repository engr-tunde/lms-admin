import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandsOrderCardContainer from "../../components/brands/brand-order/BrandsOrderCardContainer";
import AddedProductBrandsCardContainer from "../../components/brands/brand-overview/AddedProductBrandsCardContainer";
import AllBrandsTable from "../../components/brands/AllBrandsTable";
import { fetchBrands, fetchProducts } from "../../api";

function DashboardBrandsPage() {
  const [activeTab, setActiveTab] = useState("Brand overview");
  const { brands, brandsLoading, brandsError } = fetchBrands();
  const { products, productsLoading, productsError } = fetchProducts();
  console.log("brands ss", brands);
  console.log("products ss", products);

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
      <AddedProductBrandsCardContainer />
      <AllBrandsTable brandsData={brands} />
    </div>
  );
}

export default DashboardBrandsPage;
