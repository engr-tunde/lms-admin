import { DollarIcon, ClockIcon, CheckIcon, TrendingUpIcon } from "../../globals/Icons";
import FinanceStatCard from "./FinanceStatCard";

const FinanceStatCardContainer = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <FinanceStatCard
        title="Total Earnings"
        stats={12450.00}
        Icon={DollarIcon} 
      />
      <FinanceStatCard
        title="Pending Payouts"
        stats={3200.00}
        Icon={ClockIcon} 
      />
      <FinanceStatCard
        title="This Month"
        stats={4500.00}
        Icon={TrendingUpIcon} 
      />
      <FinanceStatCard
        title="Last Payout"
        stats={2800.00}
        Icon={CheckIcon} 
      />
    </div>
  );
};

export default FinanceStatCardContainer;


