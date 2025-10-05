import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import ProductCardContainer from "../../components/products/ProductCardContainer";
import NewlyAddedProductCardContainer from "../../components/products/AddedProductCardContainer";
import ProductDisplayContainer from "../../components/products/ProductDisplayContainer";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";

function DashboardProductPage() {
  const { products, productsLoading, productsError, mutate } = fetchProducts();
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  console.log("products", products);

  const newlyAdded = () => {
    if (!products?.products) return [];
    const sorted = [...products.products].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return sorted.slice(0, 3);
  };


  useEffect(() => {
    if (products) {
      setoriginalArr(products?.products);
      setfilteredData(products?.products);
    }
  }, [products]);

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
        {
          filteredData ? (
            <>
            <NewlyAddedProductCardContainer products={newlyAdded()}/>
            <ProductDisplayContainer
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              mutate={mutate}
            />
            </>
          ) : productsLoading ? (
            <Loader />
          ) : productsError ? (
            <ErrorWidget error={productsError} />
          ) : null
        }
      </div>
    </div>
  );
}

export default DashboardProductPage;
