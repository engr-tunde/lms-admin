import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandsOrderCardContainer from "./BrandsOrderCardContainer";
import BrandsOrderTable from "./BrandsOrderTable";
import { fetchBrandOrder } from "../../../api/index.js";
import Loader from "../../globals/Loader.jsx";
import ErrorWidget from "../../globals/ErrorWidget.jsx";
import { useEffect, useState } from "react";
import NoDataPage from "../../globals/NoDataPage.jsx";
import Pagination from "../../globals/Pagination.jsx";

function BrandsOrderPage({ brandId }) {
  const [filteredData, setfilteredData] = useState();
  const [ originalArr, setOriginalArr ] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const { brandOrder, brandOrderLoading, brandOrderError, mutate } = fetchBrandOrder(brandId);

  useEffect(() => {
    if (brandOrder?.orders?.length) {
        setfilteredData(brandOrder?.orders);
        setOriginalArr(brandOrder?.orders);
    }
  }, [brandOrder?.orders]);
  
  const itemsPerPage = brandOrder?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (brandOrderLoading) return <Loader />;
  if (brandOrderError) return <ErrorWidget />;
  if (!brandOrder) return "No orders available";
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div>
      {brandOrder?.summary && 
      <BrandsOrderCardContainer summary={brandOrder?.summary} />
      }
      {filteredData ? 
        <BrandsOrderTable 
          filteredData={currentItems} 
          setfilteredData={setfilteredData} 
          originalArr={originalArr} 
          mutate={mutate}
        /> : 
        <NoDataPage  message="No orders available for this brand" />
      }
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </>
  );
}

export default BrandsOrderPage;
