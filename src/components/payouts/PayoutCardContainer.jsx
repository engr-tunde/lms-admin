import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import { formatter, getLastUpdatedText } from "../../utils/helpers";
import { TbTruckDelivery } from "react-icons/tb";
import PayoutCard from "./PayoutCard";
import { AiOutlineDollar } from "react-icons/ai";


function PayoutCardContainer({ summary, total }) {
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
      <PayoutCard
        title="Total sales"
        figure={formatter(summary?.totalSales).slice(0, -3)}
        percent={0}
        icon={salesIcon}
        size="sm"
        // lastUpdated={getLastUpdatedText(summary?.nextDueDate)}
      />
      <PayoutCard
        title="Commission"
        figure={formatter(summary?.totalCommission).slice(0, -3)}
        percent={0}
        icon={brandsIcon}
        size="sm"
        // lastUpdated={getLastUpdatedText(summary?.nextDueDate)}
      />
      <PayoutCard
        title="Pending payout"
        figure={formatter(summary?.pendingPayouts).slice(0, -3)}
        percent={0}
        icon={dollarIcon}
        size="sm"
        // lastUpdated={getLastUpdatedText(summary?.nextDueDate)}
      />
      <PayoutCard
        title="Completed payout"
        figure={formatter(summary?.completedPayouts).slice(0, -3)}
        percent={0}
        icon={ordersIcon}
        size="sm"
        // lastUpdated={getLastUpdatedText(summary?.nextDueDate)}
      />
    </div>
  );
}

export default PayoutCardContainer;
