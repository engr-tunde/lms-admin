import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useEffect, useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import BrandRequestsTable from "../../components/brands/brand-requests/BrandRequestsTable";
import { fetchAllBrands } from "../../api";
import NoDataPage from "../../components/globals/NoDataPage";
import Pagination from "../../components/globals/Pagination";


function DashboardBrandRequests() {
  const { brands, brandsLoading, brandsError, mutate } = fetchAllBrands();
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  console.log("brands requests", brands?.summary?.brandRequests);

  useEffect(() => {
    if (brands?.summary?.brandRequests?.length) {
      setoriginalArr(brands?.summary?.brandRequests);
      setfilteredData(brands?.summary?.brandRequests);
    }
  }, [brands]);
  const itemsPerPage = 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (brandsLoading) return <Loader />;
  if (brandsError) return <ErrorWidget error={brandsError} />;
  if (!brands) return "No brands found";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Brand Requests"
          subtitle="Verify, reject and manage brand requests from new sellers."
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
        <BrandRequestsTable
          filteredData={currentItems}
          setfilteredData={setfilteredData}
          originalArr={originalArr}
          mutate={mutate}
        />
      ) : (
        <NoDataPage message="No brand requests available yet" />
      )}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default DashboardBrandRequests;
