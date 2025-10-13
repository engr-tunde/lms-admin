import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import { formatter, getPercentOfTotal } from "../../utils/helpers";
import { TbTruckDelivery } from "react-icons/tb";
import ProductCard from "./ProductCard";
import { AiOutlineDollar } from "react-icons/ai";

function ProductCardContainer({
  productCount,
  brandCount,
  pendingProductsCount,
  rejectedProductsCount,
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
        figure={formatter(productCount)?.slice(1, -3)}
        percent={getPercentOfTotal(productCount, productCount)}
        icon={dollarIcon}
      />
      <ProductCard
        title="Total registered brands"
        figure={formatter(brandCount)?.slice(1, -3)}
        percent={getPercentOfTotal(brandCount, productCount)}
        icon={salesIcon}
      />
      <ProductCard
        title="Pending approval"
        figure={formatter(pendingProductsCount)?.slice(1, -3)}
        percent={getPercentOfTotal(pendingProductsCount, productCount)}
        icon={brandsIcon}
      />
      <ProductCard
        title="Rejected products"
        figure={formatter(rejectedProductsCount)?.slice(1, -3)}
        percent={getPercentOfTotal(rejectedProductsCount, productCount)}
        icon={ordersIcon}
      />
    </div>
  );
}

export default ProductCardContainer;
