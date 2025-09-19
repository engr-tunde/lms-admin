import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import ProductCardContainer from "../../components/products/ProductCardContainer";
import NewlyAddedProductCardContainer from "../../components/products/AddedProductCardContainer";
import ProductDisplayContainer from "../../components/products/ProductDisplayContainer";

function DashboardProductPage() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <DashboardNavBar
        title="Products"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        <ProductCardContainer />
        <NewlyAddedProductCardContainer />
        <ProductDisplayContainer />
      </div>
    </div>
  );
}

export default DashboardProductPage;
