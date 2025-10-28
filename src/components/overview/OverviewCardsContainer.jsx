import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import OverviewCard from "./OverviewCard";
import { formatter } from "../../utils/helpers";
import { FaUserNinja } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";

function OverviewCardsContainer({
  totalSales,
  totalBrands,
  totalUsers,
  totalOrders,
}) {

  const salesIcon = () => (
    <RiShoppingBag2Line size={50} className="text-merseBorder" />
  );
  const brandsIcon = () => (
    <RiCoinLine size={50} className="text-merseBorder" />
  );
  const usersIcon = () => (
    <FaUserNinja size={50} className="text-merseBorder" />
  );
  const ordersIcon = () => (
    <TbTruckDelivery size={50} className="text-merseBorder" />
  );
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
      <OverviewCard
        title="Total sales"
        figure={formatter(totalSales)}
        percent={0}
        icon={salesIcon}
        size="sm"
        lastUpdated={null}
      />
      <OverviewCard
        title="Total brands"
        figure={formatter(totalBrands)?.slice(1, -3)}
        percent={0}
        icon={brandsIcon}
        lastUpdated={null}
      />
      <OverviewCard
        title="Total users"
        figure={formatter(totalUsers)?.slice(1, -3)}
        percent={0}
        icon={usersIcon}
        lastUpdated={null}
      />
      <OverviewCard
        title="Total orders"
        figure={formatter(totalOrders)?.slice(1, -3)}
        percent={0}
        icon={ordersIcon}
        lastUpdated={null}
      />
    </div>
  );
}

export default OverviewCardsContainer;
