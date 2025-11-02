import ProductsBrandsCardContainer from "./ProductsBrandsCardContainer";
import { fetchBrandProduct } from "../../../api/index.js";
import Loader from "../../globals/Loader.jsx";
import ErrorWidget from "../../globals/ErrorWidget.jsx";
import { useEffect, useState } from "react";
import NoDataPage from "../../globals/NoDataPage.jsx";
import Pagination from "../../globals/Pagination.jsx"

function ProductBrandsPage({ brandId }) {
  const { brandProduct, brandProductLoading, brandProductError, mutate } = fetchBrandProduct(brandId);
  const [filteredData, setfilteredData] = useState();
  const [ originalArr, setOriginalArr ] = useState();

  useEffect(() => {
      if (brandProduct?.products?.length) {
          setfilteredData(brandProduct?.products);
          setOriginalArr(brandProduct?.products);
      }
  }, [brandProduct]);

  if (brandProductLoading) return <Loader />;
  if (brandProductError) return <ErrorWidget />;
  if (!brandProduct) return "No products available";

  return (
    <>
      {filteredData ? 
        <ProductsBrandsCardContainer 
          filteredData={filteredData} 
          setFilteredData={setfilteredData} 
          originalArr={originalArr} 
          mutate={mutate}
        /> : 
        <NoDataPage message="No products available for this brand" />
      }
    </>
  );
}

export default ProductBrandsPage;