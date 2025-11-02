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
import NoDataPage from "../../components/globals/NoDataPage";

function DashboardProductPage() {
  const [filteredData, setfilteredData] = useState();
  const [originalArr, setoriginalArr] = useState();
  const [recentProducts, setrecentProducts] = useState();

  const { products, productsLoading, productsError, mutate } = fetchProducts();

  useEffect(() => {
    if (products?.products?.length) {
      setoriginalArr(products.products);
      setfilteredData(products.products);
    }
  }, [products?.products])

  useEffect(() => {
    if (products?.summary?.recentProducts?.length) {
      setrecentProducts(products?.summary?.recentProducts);
    } 
  }, [products?.summary?.recentProducts]);

  if (productsLoading) return <Loader />
  if (productsError) return <ErrorWidget error={productsError} />
  if (!products) return "No Products data available"

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
        { products?.summary &&
          <ProductCardContainer summary={products?.summary}/>
        }
        { recentProducts &&
          <NewlyAddedProductCardContainer recentProducts={recentProducts} />
        }

        {filteredData ? (
          <ProductDisplayContainer
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
          />
        ) : <NoDataPage message="No products has been uploaded yet" />}
      </div>
    </div>
  );
}

export default DashboardProductPage;
