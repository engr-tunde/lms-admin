import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import OrderCard from "./OrderCard";
import { getLastUpdatedText, getPercentOfTotal } from "../../utils/helpers";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";

function OrderCardsContainer({summary, total}) {
  const salesIcon = () => (
    <RiShoppingBag2Line size={50} className="text-merseBorder" />
  );
  const brandsIcon = () => (
    <RiCoinLine size={50} className="text-merseBorder" />
  );
  const dollarIcon = () => (
      <AiOutlineDollar size={50} className="text-merseBorder" />
  );
  const ordersIcon = () => (
    <TbTruckDelivery size={50} className="text-merseBorder" />
  );

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
      <OrderCard
        title="Total orders"
        figure={summary?.totalOrders}
        percent={getPercentOfTotal(summary?.totalOrders, total)}
        icon={salesIcon}
        size="sm"
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <OrderCard
        title="Delivered orders"
        figure={summary?.deliveredOrders}
        percent={getPercentOfTotal(summary?.deliveredOrders, total)}
        icon={brandsIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <OrderCard
        title="Pending orders"
        figure={summary?.pendingOrders}
        percent={getPercentOfTotal(summary?.pendingOrders, total)}
        icon={dollarIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <OrderCard
        title="Cancelled orders"
        figure={summary?.cancelledOrders}
        percent={getPercentOfTotal(summary?.cancelledOrders, total)}
        icon={ordersIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
    </div>
  );
}

export default OrderCardsContainer;
