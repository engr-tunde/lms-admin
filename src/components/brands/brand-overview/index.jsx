import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandOverviewCardContainer from "./BrandOverviewCardContainer"
import NewOrderBrandsCardContainer from "./NewOrderCardBrandsContainer"
import AddedProductBrandsCardContainer from "./AddedProductBrandsCardContainer";
import { fetchBrand, fetchBrandFinance, fetchBrandOrder, fetchBrandProduct } from "../../../api/index.js";
import Loader from "../../globals/Loader.jsx";
import ErrorWidget from "../../globals/ErrorWidget.jsx";

function BrandsOverviewPage({brandId}) {
  const { brand, brandLoading, brandError } = fetchBrand(brandId);
  const { brandOrder } = fetchBrandOrder(brandId);
  const { brandProduct } = fetchBrandProduct(brandId);
  const { brandFinance } = fetchBrandFinance(brandId);
  console.log("brand products", brandProduct);
  console.log("brand orders", brandOrder);
  console.log("brand finance", brandFinance);

  if (brandLoading) return <Loader/>
  if (brandError) return <ErrorWidget/> 
  if (!brand) return "Brand unavailable";
  
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div> 
      <BrandOverviewCardContainer totalProducts={brandProduct?.totalCount} orderSummary={brandOrder?.summary} totalEarnings={brandFinance?.summary?.totalEarnings} />
      <NewOrderBrandsCardContainer orders={brandOrder?.orders}/> 
      <AddedProductBrandsCardContainer products={brandProduct?.products} />
    </>
  );
}

export default BrandsOverviewPage;
