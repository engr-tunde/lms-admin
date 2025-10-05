import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import OrderCardsContainer from "../../components/orders/OrderCardContainer";
import NewOrderCardContainer from "../../components/orders/NewOrderCardContainer";
import OrderTable from "../../components/orders/OrderTable.jsx";
import { fetchOrders } from "../../api/index.js";


function DashboardOrdersPage() {
  const { orders, ordersLoading, ordersError, mutate } = fetchOrders();
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
        <OrderCardsContainer />
        <NewOrderCardContainer />
        <OrderTable />
      </div>
    </div>
  );
}

export default DashboardOrdersPage;
