import { DownloadIcon } from "../globals/Icons";
import TableSearch from "../globals/TableSearch";
import PayoutRowTemplate from "./PayoutRowTemplate";
import Table from "../globals/Table";
import StatusFilter from "../globals/StatusFilter";
import { payoutsColumnHeader } from "../../data/payoutsData";
import { handleExportPDF } from "../../utils/helpers";
import { fetchAllOrders } from "../../api";
import { NoPayoutMade } from "../globals/NoValuesPage";
import { useEffect, useState } from "react";

const PayoutTable = () => {
  const { orders, ordersLoading, ordersError } = fetchAllOrders()
  const [filteredData, setFilteredData] = useState();
  const [originalArr, setOriginalArr] = useState();

  useEffect(() => {
    if (orders?.data?.orders?.count?.length) {
      setFilteredData(orders.data.orders?.count);
      setOriginalArr(orders.data.orders?.count);
    }
  }, [orders]);

  if (ordersLoading) return <Loader />;
  if (ordersError) return <ErrorWidget error={response?.data?.message} />;
  if (originalArr?.length === 0) return <NoPayoutMade />;

  const ordersStatus = [
    { title: "All", value: "all" },
    { title: "Completed", value: "completed" },
    { title: "Pending", value: "pending" },
    { title: "Processing", value: "processing" },
    { title: "Failed", value: "failed" },
  ];  


  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TableSearch 
            originalArr={originalArr}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            searchable={['payment_reference', 'course_title']}
          />
        </div>

        <div className="flex items-center gap-3">
          <StatusFilter
            originalArr={originalArr}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            filterArr={ordersStatus}
          />
          <button 
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            onClick={() => handleExportPDF({ data: filteredData, columns: payoutsColumnHeader, pdfTitle: 'orders' })}
          >
            <DownloadIcon className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <Table
        renderRow={(item) => (
          <PayoutRowTemplate
            key={item?.id}
            item={item}
          />
        )}
        columns={payoutsColumnHeader}
        data={filteredData}
      />
    </div>
  );
}

export default PayoutTable;