import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useEffect, useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import BrandRequestsTable from "../../components/brands/brand-requests/BrandRequestsTable";
import { fetchAllBrands } from "../../api";


function DashboardBrandRequests() {
  const { brands, brandsLoading, brandsError, mutate } = fetchAllBrands();
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  console.log("brands requests", brands?.summary?.brandRequests);

  useEffect(() => {
    if (brands) {
      setoriginalArr(brands?.summary?.brandRequests);
      setfilteredData(brands?.summary?.brandRequests);
    }
  }, [brands]);


  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Brand Requests"
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
      {filteredData ? (
        <>
          <BrandRequestsTable
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

export default DashboardBrandRequests;
