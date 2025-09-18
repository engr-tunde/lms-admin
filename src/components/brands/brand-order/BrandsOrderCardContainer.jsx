import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import { formatter } from "../../../utils/helpers";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import BrandsOrderCard from "./BrandsOrderCard";

function BrandsOrderCardContainer() {
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
        figure={formatter(2000000)}
        percent={0}
        icon={salesIcon}
        size="sm"
      />
      <BrandsOrderCard
        title="Total Fulfilled"
        figure={formatter(15000)?.slice(1, -3)}
        percent={+20}
        icon={dollarIcon}
      />
      <BrandsOrderCard
        title="Pending orders"
        figure={formatter(32000)?.slice(1, -3)}
        percent={0}
        icon={brandsIcon}
      />
      <BrandsOrderCard
        title="Completed orders"
        figure={formatter(12000)?.slice(1, -3)}
        percent={0}
        icon={ordersIcon}
      />
    </div>
  );
}

export default BrandsOrderCardContainer;
