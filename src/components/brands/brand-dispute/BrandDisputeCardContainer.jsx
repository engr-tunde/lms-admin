import { RiCoinLine, RiHandCoinLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { formatter } from "../../../utils/helpers";
import BrandDisputeCard from "./BrandDisputeCard"

function BrandDisputeCardContainer({ summary }) {
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
        <BrandDisputeCard
          title="Total dispute"
          figure={summary?.totalDisputes || 0}
          percent={0}
          icon={earningsIcon}
        />
        <BrandDisputeCard
          title="Open dispute"
          figure={summary?.openDisputes || 0}
          percent={0}
          icon={brandsIcon}
        />
        <BrandDisputeCard
          title="Resolved dispute"
          figure={summary?.resolvedDisputes || 0}
          percent={0}
          icon={walletIcon}
        />
        <BrandDisputeCard
          title="Rejected dispute"
          figure={summary?.rejectedDisputes || 0}
          percent={0}
          icon={walletIcon}
        />
        
      </div>
  );
}

export default BrandDisputeCardContainer;
