import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import AllBrandsCard from "./AllBrandsCard"
import { getLastUpdatedText, getPercentOfTotal } from "../../utils/helpers";

function AllBrandsCardContainer({ summary }) {
  console.log("summary", summary);
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
      <AllBrandsCard
        title="Total registered Brands"
        figure={summary?.totalBrands}
        percent={getPercentOfTotal(summary?.totalBrands, summary?.totalBrands)}
        icon={salesIcon}
        size="sm"
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <AllBrandsCard
        title="Active Brands"
        figure={summary?.activeBrands}
        percent={getPercentOfTotal(summary?.activeBrands, summary?.totalBrands)}
        icon={dollarIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <AllBrandsCard
        title="Pending Approval"
        figure={summary?.pendingApprovals}
        percent={getPercentOfTotal(summary?.pendingApprovals, summary?.totalBrands)}
        icon={brandsIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
      <AllBrandsCard
        title="Suspended Brands"
        figure={summary?.suspendedBrands}
        percent={getPercentOfTotal(summary?.suspendedBrands, summary?.totalBrands)}
        icon={ordersIcon}
        lastUpdated={getLastUpdatedText(summary?.lastUpdated)}
      />
    </div>
  );
}

export default AllBrandsCardContainer;
