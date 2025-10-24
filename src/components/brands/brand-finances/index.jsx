import BrandFinanceTable from "./BrandFinanceTable.jsx";
import BrandFinanceCardContainer from "./BrandFinanceCardContainer.jsx";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { fetchBrandFinance } from "../../../api/index.js";
import Loader from "../../globals/Loader.jsx"
import ErrorWidget from "../../globals/ErrorWidget.jsx"
import NoDataPage from "../../globals/NoDataPage.jsx"
import Pagination from "../../globals/Pagination.jsx"
import { useEffect, useState } from "react";

function BrandFinancePage({ brandId }) {
  const { brandFinance, brandFinanceLoading, brandFinanceError } = fetchBrandFinance(brandId);
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setOriginalArr] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  console.log("brand finances", brandFinance);

  useEffect(() => {
    if (brandFinance?.payouts.length) {
      setfilteredData(brandFinance.payouts);
      setOriginalArr(brandFinance.payouts);
    }
  }, [brandFinance?.payouts])

  const itemsPerPage = brandFinance?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (brandFinanceLoading) return <Loader />
  if (brandFinanceError) return <ErrorWidget message="Failed to load brand finances." />;
  if (!brandFinance) return "No brand finances found."

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">June</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div> 
      { brandFinance?.summary &&
        <BrandFinanceCardContainer summary={brandFinance.summary} />
      }
      { filteredData ? (
          <BrandFinanceTable 
            filteredData={currentItems}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
          />
        ) : <NoDataPage message={"No Finance data available yet"}/>
      }
      <Pagination
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </>
  );
}

export default BrandFinancePage;