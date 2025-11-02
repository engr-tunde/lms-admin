import { useEffect, useState } from "react";
import TableSearch from "../../globals/TableSearch.jsx";
import Table from "../../globals/Table.jsx";
import UsersOrderRowTemplate from "./UsersOrderRowTemplate.jsx"
import DashboardNavBar from "../../globals/DashboardNavBar.jsx";
import { fetchAllOrders, fetchUser } from "../../../api/index.js";
import ErrorWidget from "../../globals/ErrorWidget.jsx";
import Loader from "../../globals/Loader.jsx";
import NoDataPage from "../../globals/NoDataPage.jsx";
import Pagination from "../../globals/Pagination.jsx";

function UsersOrderTable({ recentOrders, userLoading, userError }) {
  const [status, setStatus] = useState("all"); 
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  if (userLoading) return <Loader />;
  if (userError) return <ErrorWidget error={userError} />;

  useEffect(() => {
    if (recentOrders?.length) {
      setfilteredData(recentOrders)
      setoriginalArr(recentOrders)
    }
  }, [recentOrders])

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

  const handleChange = (e) => {
    setStatus(e.target.value);
    const filtered = originalArr?.filter((order) => {
      if (e.target.value === "all") return true;
      return order.status === e.target.value;
    });
    setfilteredData(filtered);
  }
  
  
  const searchable = [
    "status", 
    "id", 
  ];


  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Order History"
        subtitle="Complete list of all orders placed by this user"
      />
      <div className="flex flex-col gap-2">
        <div className="w-full h-full flex justify-between">
          { recentOrders?.length ? (
            <>
            <div className="flex items-center cursor-pointer">
              <TableSearch 
                filteredData={filteredData}
                setfilteredData={setfilteredData}
                originalArr={originalArr}
                searchable={searchable}
              />
            </div>
            <div className="flex gap-3 text-sm focus:outline-none border-[1px] border-merseBorder">
              <select
                id="status"
                name="status"
                className="border p-2 rounded"
                value={status}
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value="delivered">Delivered</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="ware_housed">Warehoused</option>
                <option value="cancelled">Cancelled</option>
                <option value="out_for_delivery">Out for Delivery</option>
                <option value="shipped">Shipped</option>
              </select>
            </div>
          </>
          ) : null}
        </div>
        <div className="w-full">
          {filteredData ? (
            <Table 
            columns={usersOrderColumnHeader}
            renderRow={(userOrder, i) => (
              <UsersOrderRowTemplate
                key={userOrder?._id}
                userOrder={userOrder}
                i={i}
                // mutate={mutate}
              />
            )}
            data={currentItems}
          />) : 
           <NoDataPage message="No orders available for this user"/>
          }
        </div>
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default UsersOrderTable;






export const usersOrderColumnHeader = [
    {
        header: "Order ID", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Date", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Qty", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Total amount", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Order status", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Actions", 
        className: "text-sm font-medium text-merseLightText"
    }, 
]



export const usersOrderData = [
    {
        id: 1,
        orderID: "ORD12344", 
        date: "22-02-2020", 
        qty: 2, 
        totalAmount: 120000, 
        status: "Processing", 
    }, 
    {
        id: 2,
        orderID: "ORD12344", 
        date: "22-02-2020", 
        qty: 2, 
        totalAmount: 120000, 
        status: "Processing", 
    }, 
    {
        id: 3,
        orderID: "ORD12344", 
        date: "22-02-2020", 
        qty: 2, 
        totalAmount: 120000, 
        status: "Processing", 
    }, 
    {
        id: 4,
        orderID: "ORD12344", 
        date: "22-02-2020", 
        qty: 2, 
        totalAmount: 120000, 
        status: "Processing", 
    }, 
    {
        id: 5,
        orderID: "ORD12344", 
        date: "22-02-2020", 
        qty: 2, 
        totalAmount: 120000, 
        status: "Processing", 
    }, 
    {
        id: 6,
        orderID: "ORD12344", 
        date: "22-02-2020", 
        qty: 2, 
        totalAmount: 120000, 
        status: "Processing", 
    },    
]








