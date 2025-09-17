import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import { formatter } from "../../utils/helpers";
import { TbTruckDelivery } from "react-icons/tb";
import PayoutCard from "./PayoutCard";
import { FaSearchDollar } from "react-icons/fa";

function PayoutCardContainer() {
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
      <PayoutCard
        title="Total sales"
        figure={formatter(2000000)}
        percent={0}
        icon={salesIcon}
        size="sm"
      />
      <PayoutCard
        title="Commission"
        figure={formatter(1000000)}
        percent={0}
        icon={brandsIcon}
        size="sm"
      />
      <PayoutCard
        title="Pending payout"
        figure={formatter(200000)?.slice(1, -3)}
        percent={0}
        icon={dollarIcon}
        size="sm"
      />
      <PayoutCard
        title="Completed payout"
        figure={formatter(2000000)}
        percent={0}
        icon={ordersIcon}
        size="sm"
      />
    </div>
  );
}

export default PayoutCardContainer;
