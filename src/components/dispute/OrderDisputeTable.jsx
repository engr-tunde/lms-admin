import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { orderDisputeTableColumn, orderDisputeData } from "../../data/disputeData.js";
import OrderDisputeRowTemplate from "./OrderDisputeRowTemplate.jsx";
import { fetchAllDisputes } from "../../api/index.js";
import { useEffect, useState } from "react";
import Loader from "../globals/Loader.jsx";
import ErrorWidget from "../globals/ErrorWidget.jsx";

function OrderDisputeTable({ activeTab, setActiveTab}) {
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const { disputes: orderDispute, disputesLoading, disputeError } = fetchAllDisputes("order");
  console.log("orderDispute", orderDispute);

  useEffect(() => {
    if (orderDispute) {
      setoriginalArr(orderDispute?.disputes);
      setfilteredData(orderDispute?.disputes);
    }
  }, [orderDispute]);

  if (disputesLoading) return <Loader />;
  if (disputeError) return <ErrorWidget error={disputeError} />;
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
            <TableSearch 
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
            />
        </div>
      </div>
      <Table 
      columns={orderDisputeTableColumn}
      renderRow={(item, i) => (
          <OrderDisputeRowTemplate
            key={item?._id}
            item={item}
            i={i}
          />
        )}
      data={filteredData}
      />
    </div>
  );
}

export default OrderDisputeTable;