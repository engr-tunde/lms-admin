import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import OrderCard from "./OrderCard";
import { formatter } from "../../utils/helpers";
import { FaSearchDollar } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

function OrderCardsContainer() {
  const salesIcon = () => (
    <RiShoppingBag2Line size={50} className="text-merseBorder" />
  );
  const brandsIcon = () => (
    <RiCoinLine size={50} className="text-merseBorder" />
  );
  const dollarIcon = () => (
      <FaSearchDollar size={50} className="text-merseBorder" />
  );
  const ordersIcon = () => (
    <TbTruckDelivery size={50} className="text-merseBorder" />
  );
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
      <OrderCard
        title="Total orders"
        figure={formatter(2000000)}
        percent={0}
        icon={salesIcon}
        size="sm"
      />
      <OrderCard
        title="Delivered orders"
        figure={formatter(15000)?.slice(1, -3)}
        percent={+20}
        icon={brandsIcon}
      />
      <OrderCard
        title="Pending orders"
        figure={formatter(32000)?.slice(1, -3)}
        percent={0}
        icon={dollarIcon}
      />
      <OrderCard
        title="Cancelled orders"
        figure={formatter(12000)?.slice(1, -3)}
        percent={0}
        icon={ordersIcon}
      />
    </div>
  );
}

export default OrderCardsContainer;
