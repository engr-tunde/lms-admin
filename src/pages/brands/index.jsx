import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useEffect, useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandsOrderCardContainer from "../../components/brands/brand-order/BrandsOrderCardContainer";
import AllBrandsTable from "../../components/brands/AllBrandsTable";
import { fetchBrands } from "../../api";
import BrandRequestContainer from "../../components/globals/BrandRequestContainer";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";

function DashboardBrandsPage() {
  const { brands, brandsLoading, brandsError, mutate } = fetchBrands();
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  console.log("brands ss", brands);

  useEffect(() => {
    if (brands) {
      setoriginalArr(brands?.brands);
      setfilteredData(brands?.brands);
    }
  }, [brands]);

  
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
      {filteredData ? (
        <>
          <BrandRequestContainer brandsData={newlyAddedBrands()} />
          <AllBrandsTable
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
          />
        </>
        ) : brandsLoading ? (
        <Loader />
      ) : brandsError ? (
        <ErrorWidget error={brandsError} />
      ) : null}
    </div>
  );
}

export default DashboardBrandsPage;
