import TableSearch from "../../globals/TableSearch.jsx"
import Table from "../../globals/Table.jsx"
import { brandDisputeOrderTableColumn, brandDisputeOrderData } from "../../../data/brandsData.js";
import BrandDisputeOrderRowTemplate from "./BrandDisputeOrderRowTemplate.jsx";
import { fetchBrandDispute } from "../../../api/index.js";
import Loader from "../../globals/Loader.jsx";
import ErrorWidget from "../../globals/ErrorWidget.jsx";
import { useEffect, useState } from "react";
import NoDataPage from "../../globals/NoDataPage.jsx";
import Pagination from "../../globals/Pagination.jsx";

function BrandDisputeOrderTable({ activeTab, setActiveTab, brandId }) {
  const {brandDispute, brandDisputeLoading, brandDisputeError} = fetchBrandDispute(brandId, "order");
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (brandDispute?.disputes?.length) {
      setoriginalArr(orderDispute?.disputes);
      setfilteredData(orderDispute?.disputes);
    }
  }, [brandDispute?.disputes]);

  const itemsPerPage = brandDispute?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (brandDisputeLoading) return <Loader />;
  if (brandDisputeError) return <ErrorWidget error={brandDisputeError} />;
  if (!brandDispute) return <div>No order disputes found</div>;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold flex gap-2 text-md items-end">
            <button 
            onClick={() => setActiveTab("Order Dispute")}
            className={`px-3 py-1 rounded ${
                activeTab === "Order Dispute" ? "text-black" : "text-merseBorder"
            }`}
            >
                Order Dispute
            </button>
            <button 
            onClick={() => setActiveTab("Payout Dispute")}
            className={`px-3 py-1 rounded ${
                activeTab === "Payout Dispute" ? "text-black" : "text-merseBorder"
            }`}
            >
                Payout Dispute
            </button>
        </div>
        <div className="flex items-center cursor-pointer">
            <TableSearch 
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              searchable={["disputeType", "brand.name"]}
            />
        </div>
      </div>
      {
      filteredData ? 
      <Table 
        columns={brandDisputeOrderTableColumn}
        renderRow={(item, i) => (
          <BrandDisputeOrderRowTemplate
            key={item?._id}
            item={item}
            i={i}
          />
          )}
        data={currentItems}
      /> : (<NoDataPage message="No order disputes is available yet" />)
      }
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default BrandDisputeOrderTable;