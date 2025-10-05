import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import OverviewCards from "../../components/overview/OverviewCardsContainer";
import BrandRequestContainer from "../../components/globals/BrandRequestContainer";
import OverviewTable from "../../components/overview/OverviewTable";
import { fetchBrands } from "../../api";

function DashboardOverviewPage() {
  const { brands, brandsLoading, brandsError } = fetchBrands();
    console.log("brands ss", brands);
  
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
    <div className="flex flex-col gap-6 h-full">
      <DashboardNavBar
        title="Overview"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        <OverviewCards />
        <BrandRequestContainer brandsData={newlyAddedBrands()} />
        <OverviewTable />
      </div>
    </div>
  );
}

export default DashboardOverviewPage;
