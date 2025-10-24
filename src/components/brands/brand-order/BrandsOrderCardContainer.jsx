import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import { formatter, getLastUpdatedText } from "../../../utils/helpers";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import BrandsOrderCard from "./BrandsOrderCard";

function BrandsOrderCardContainer({ summary }) {
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
      <BrandsOrderCard
        title="Total orders"
        figure={formatter(summary?.totalOrders).slice(0, -3)}
        percent={0}
        icon={salesIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
        size="sm"
      />
      <BrandsOrderCard
        title="Total Fulfilled"
        figure={summary?.totalFulfilled}
        percent={0}
        icon={dollarIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <BrandsOrderCard
        title="Pending orders"
        figure={summary?.pendingOrders}
        percent={0}
        icon={brandsIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <BrandsOrderCard
        title="Completed orders"
        figure={summary?.completedOrders}
        percent={0}
        icon={ordersIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
    </div>
  );
}

export default BrandsOrderCardContainer;
