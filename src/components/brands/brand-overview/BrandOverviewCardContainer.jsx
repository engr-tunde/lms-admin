import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import BrandOverviewCard from "./BrandOverviewCard";
import { formatter, getLastUpdatedText } from "../../../utils/helpers";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";

function BrandOverviewCardContainer({ orderSummary, totalProducts, totalEarnings}) {
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
        <BrandOverviewCard
          title="Total Earnings"
          figure={formatter(totalEarnings)?.slice(0, -3) || 0}
          percent={+20}
          icon={salesIcon}
          // lastUpdated={getLastUpdatedText()}
        />
        <BrandOverviewCard
          title="Total products"
          figure={totalProducts || 0}
          percent={0}
          icon={dollarIcon}
          // lastUpdated={getLastUpdatedText()}
        />
        <BrandOverviewCard
          title="Pending orders"
          figure={orderSummary?.pendingOrders || 0}
          percent={+20}
          icon={brandsIcon}
          lastUpdated={orderSummary?.lastUpdated ? getLastUpdatedText(orderSummary?.lastUpdated) : ""}
        />
        <BrandOverviewCard
          title="Completed order"
          figure={orderSummary?.completedOrders || 0}
          percent={0}
          icon={ordersIcon}
          lastUpdated={orderSummary?.lastUpdated ? getLastUpdatedText(orderSummary?.lastUpdated) : ""}
        />
      </div>
  );
}

export default BrandOverviewCardContainer;

