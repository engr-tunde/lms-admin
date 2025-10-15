import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import OrderCardsContainer from "../../components/orders/OrderCardContainer";
import NewOrderCardContainer from "../../components/orders/NewOrderCardContainer";
import OrderTable from "../../components/orders/OrderTable.jsx";
import { fetchOrders } from "../../api/index.js";
import { useEffect, useState } from "react";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import Loader from "../../components/globals/Loader.jsx";


function DashboardOrdersPage() {
  const { orders, ordersLoading, ordersError, mutate } = fetchOrders();
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState(); 
  


  useEffect(() => {
    if (orders) {
      setoriginalArr(orders?.orders);
      setfilteredData(orders?.orders);
    }
  }, [orders]);

  const newlyAddedOrders = () => {
      let allOrders = orders?.orders

      if (!allOrders) return [];
      const pendingOrders = allOrders.filter(order => order.status === "pending");
      if (pendingOrders.length > 0) {
         allOrders = pendingOrders
      };
      const sorted = [...allOrders].sort(
        (a, b) => new Date(b.created_at || b.createdAt) - new Date(a.created_at || a.createdAt)
      );
      return sorted.slice(0, 3);
    };

  console.log("orders ss", orders);

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
        {filteredData ? (
          <>
          <OrderCardsContainer 
            summary={orders?.summary}
            total={orders?.total}
          />
          <NewOrderCardContainer newOrders={newlyAddedOrders()} />
          <OrderTable
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
          />
          </>
        ) : ordersLoading ? (
          <Loader />
        ) : ordersError ? (
          <ErrorWidget error={ordersError} />
        ) : null}
      </div>
    </div>
  );
}

export default DashboardOrdersPage;
