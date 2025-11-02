import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useEffect, useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import AllBrandsTable from "../../components/brands/AllBrandsTable";
import { fetchAllBrands } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import AllBrandsCardContainer from "../../components/brands/AllBrandsCardContainer";
import BrandRequestContainer from "../../components/brands/brand-requests/BrandRequestContainer";
import NoDataPage from "../../components/globals/NoDataPage";
import Pagination from "../../components/globals/Pagination";

function DashboardBrandsPage() {
  const { brands, brandsLoading, brandsError, mutate } = fetchAllBrands();
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  const [summary, setsummary] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (brands?.brands?.length) {
      setoriginalArr(brands?.brands);
      setfilteredData(brands?.brands);
    }
  }, [brands]);

  useEffect(() => {
    if (brands?.summary) {
      setsummary(brands?.summary);
    }
  }, [brands]);

  const itemsPerPage = brands?.brands?.limit || 10;
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
      {summary && (
        <>
        <AllBrandsCardContainer summary={summary} />
        <BrandRequestContainer requests={summary?.brandRequests} />
        </>
      )}
      {filteredData ? (
        <AllBrandsTable
          filteredData={currentItems}
          setfilteredData={setfilteredData}
          originalArr={originalArr}
          mutate={mutate}
        />
      ) : (
        <NoDataPage message="No brands available yet" />
      )}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default DashboardBrandsPage;
