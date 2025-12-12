import { DownloadIcon } from "../globals/Icons";
import TableSearch from "../globals/TableSearch";
import PayoutRowTemplate from "./OrdersRowTemplate";
import Table from "../globals/Table";
import StatusFilter from "../globals/StatusFilter";
import { ordersColumnHeader } from "../../data/financesData";
import { handleExportPDF } from "../../utils/helpers";
import { fetchAllOrders, fetchAllPayments } from "../../api";
import { NoPayoutMade } from "../globals/NoValuesPage";
import { useEffect, useState } from "react";
import Loader from "../globals/Loader";
import ErrorWidget from "../globals/ErrorWidget";
import OrdersRowTemplate from "./OrdersRowTemplate";
import Pagination from "../globals/Pagination";

const OrdersTable = () => {
  const { orders, ordersLoading, ordersError } = fetchAllOrders()
  const [filteredData, setFilteredData] = useState();
  const [originalArr, setOriginalArr] = useState();
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    if (orders?.data?.orders?.count?.length) {
      setFilteredData(orders.data.orders?.count);
      setOriginalArr(orders.data.orders?.count);
    }
  }, [orders]);
  const { payments } = fetchAllPayments()
  console.log("Payments:", payments);

  if (ordersLoading) return <Loader />;
  if (ordersError) return <ErrorWidget error={"Error"} />;
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
            setFilteredData={setFilteredData}
            filterArr={ordersStatus}
            filterKey = "payment_status"
          />
          <button 
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            onClick={() => handleExportPDF({ data: filteredData, columns: ordersColumnHeader, pdfTitle: 'orders' })}
          >
            <DownloadIcon className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <Table
        renderRow={(item) => (
          <OrdersRowTemplate
            key={item?._id}
            item={item}
          />
        )}
        columns={ordersColumnHeader}
        data={currentItems}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default OrdersTable;