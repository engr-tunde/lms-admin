import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { orderDisputeTableColumn, orderDisputeData } from "../../data/disputeData.js";
import OrderDisputeRowTemplate from "./OrderDisputeRowTemplate.jsx";
import { fetchAllDisputes } from "../../api/index.js";
import { useEffect, useState } from "react";
import Loader from "../globals/Loader.jsx";
import ErrorWidget from "../globals/ErrorWidget.jsx";
import NoDataPage from "../globals/NoDataPage.jsx";
import Pagination from "../globals/Pagination.jsx";

function OrderDisputeTable({ activeTab, setActiveTab}) {
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const { disputes: orderDispute, disputesLoading, disputesError } = fetchAllDisputes("order");
  console.log("orderDispute", orderDispute);

  useEffect(() => {
    if (orderDispute?.disputes?.length) {
      setoriginalArr(orderDispute?.disputes);
      setfilteredData(orderDispute?.disputes);
    }
  }, [orderDispute]);

  const itemsPerPage = orderDispute?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (disputesLoading) return <Loader />;
  if (disputesError) return <ErrorWidget error={disputesError} />;
  if (!orderDispute) return <div>No order disputes found</div>;

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
          {filteredData && (
            <TableSearch 
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              searchable={["disputeType", "brand.name"]}
            />
          )}
        </div>
      </div>
      {filteredData ? (
      <Table 
        columns={orderDisputeTableColumn}
        renderRow={(item, i) => (
          <OrderDisputeRowTemplate
            key={item?._id}
            item={item}
            i={i}
          />
          )}
        data={currentItems}
      />) : (<NoDataPage message="No order disputes is available yet" />)}
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default OrderDisputeTable;