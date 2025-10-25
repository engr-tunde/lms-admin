import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import OrderCardsContainer from "../../components/orders/OrderCardContainer";
import NewOrderCardContainer from "../../components/orders/NewOrderCardContainer";
import OrderTable from "../../components/orders/OrderTable.jsx";
import { fetchAllOrders } from "../../api/index.js";
import { useEffect, useState } from "react";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import Loader from "../../components/globals/Loader.jsx";
import NoDataPage from "../../components/globals/NoDataPage.jsx"
import Pagination from "../../components/globals/Pagination.jsx";


function DashboardOrdersPage() {
  const { orders, ordersLoading, ordersError, mutate } = fetchAllOrders();
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState(); 
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    if (orders?.orders?.length) {
      setoriginalArr(orders?.orders);
      setfilteredData(orders?.orders);
    }
  }, [orders?.orders]);

  const newlyAddedOrders = () => {
    let allOrders = orders?.orders

    if (!allOrders) return [];
    const pendingOrders = allOrders.filter(order => order.status === "pending");
    if (pendingOrders.length > 3) {
        allOrders = pendingOrders
    };
    const sorted = [...allOrders].sort(
      (a, b) => new Date(b.created_at || b.createdAt) - new Date(a.created_at || a.createdAt)
    );
    return sorted.slice(0, 3);
  };

  console.log("orders ss", orders);

  const itemsPerPage = orders?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (ordersLoading) return <Loader />;
  if (ordersError) return <ErrorWidget error={ordersError} />;  
  if (!orders) return "No Order available";

  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Orders"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        {orders?.summary && <OrderCardsContainer summary={orders?.summary} />}
        {newlyAddedOrders().length > 0 && (
          <NewOrderCardContainer newOrders={newlyAddedOrders()} />
        )}
        {filteredData ? (
          <OrderTable
            filteredData={currentItems}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
          />
        ) : <NoDataPage message="It seems orders have not been uploaded yet" />
        }
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  );
}

export default DashboardOrdersPage;
