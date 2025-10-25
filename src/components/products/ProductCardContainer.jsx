import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import ProductCard from "./ProductCard";
import { AiOutlineDollar } from "react-icons/ai";

function ProductCardContainer({
  summary
}) {
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
      <ProductCard
        title="Total products"
        figure={summary?.totalProducts}
        percent={0}
        icon={dollarIcon}
      />
      <ProductCard
        title="Total registered brands"
        figure={summary?.totalRegisteredBrands}
        percent={0}
        icon={salesIcon}
      />
      <ProductCard
        title="Pending approval"
        figure={summary?.totalPendingApproval}
        percent={0}
        icon={brandsIcon}
      />
      <ProductCard
        title="Rejected products"
        figure={summary?.totalRejectedProducts}
        percent={0}
        icon={ordersIcon}
      />
    </div>
  );
}

export default ProductCardContainer;
