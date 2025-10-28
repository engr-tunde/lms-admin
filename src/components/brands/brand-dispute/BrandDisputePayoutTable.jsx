import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { brandDisputePayoutTableColumn, brandDisputePayoutData } from "../../../data/brandsData.js";
import BrandDisputePayoutRowTemplate from "./BrandDisputePayoutRowTemplate.jsx";
import ErrorWidget from "../../globals/ErrorWidget.jsx";
import Loader from "../../globals/Loader.jsx";
import { fetchBrandDispute } from "../../../api/index.js";
import NoDataPage from "../../globals/NoDataPage.jsx";
import Pagination from "../../globals/Pagination.jsx";
import { useEffect, useState } from "react";


function BrandDisputePayoutTable({ activeTab, setActiveTab, brandId }) {
  const {brandDispute, brandDisputeLoading, brandDisputeError} = fetchBrandDispute(brandId, "payout");
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (brandDispute?.disputes?.length) {
      setoriginalArr(brandDispute?.disputes);
      setfilteredData(brandDispute?.disputes);
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
              originalArr={originalArr}
              setfilteredData={setfilteredData}
              searchable={["disputeType"]}
            />
        </div>
      </div>
      { filteredData ? 
        <Table 
          columns={brandDisputePayoutTableColumn}
          renderRow={(item, i) => (
          <BrandDisputePayoutRowTemplate
            key={item?._id}
            item={item}
            i={i}
          />
          )}
        data={currentItems}
        />
       : (
        <NoDataPage message="It seems no payout dispute is available yet" />
      )
      }
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default BrandDisputePayoutTable;