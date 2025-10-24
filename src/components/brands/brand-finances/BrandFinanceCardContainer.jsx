import { RiCoinLine, RiHandCoinLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { dateFormatter, formatter } from "../../../utils/helpers";
import { BrandFinanceCard, PayoutCardDetails} from "./BrandFinanceCard"

function BrandFinanceCardContainer({ summary }) {
  const earningsIcon = () => (
    <RiHandCoinLine size={25} className="text-merseBorder" />
  );
  const brandsIcon = () => (
    <RiCoinLine size={25} className="text-merseBorder" />
  );
  const walletIcon = () => (
    <BiWallet size={25} className="text-merseBorder" />
  );
  return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
        <BrandFinanceCard
          title="Total Earnings"
          figure={formatter(summary?.totalEarnings)?.slice(0, -3)}
          percent={+3.3}
          summary={`+3.3 from last month`}
          icon={earningsIcon}
          date={null}
        />
        <BrandFinanceCard
          title="Pending Payouts"
          figure={formatter(summary?.pendingPayouts)?.slice(0, -3)}
          percent={0}
          summary={null}
          icon={brandsIcon}
          date={null}
        />
        <BrandFinanceCard
          title="Last Payout"
          figure={formatter(summary?.lastPayout)?.slice(0, -3)}
          percent={+3.3}
          summary={`+3.3 compared to the last month`}
          icon={walletIcon}
          date={"Jun 21, 2025"}
        />
        <PayoutCardDetails
          date={dateFormatter(summary?.nextDueDate)}
          cardNumber={"******123478"}
          cardProvider={"Stripe"}
        />
      </div>
  );
}

export default BrandFinanceCardContainer;
