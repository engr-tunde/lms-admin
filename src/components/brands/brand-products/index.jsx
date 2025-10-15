import ProductsBrandsCardContainer from "./ProductsBrandsCardContainer";
import { fetchBrandProduct } from "../../../api/index.js";

function ProductBrandsPage({ brandId }) {
    const { brandProduct, brandProductLoading, brandProductError } = fetchBrandProduct(brandId);
    console.log("brandId ss", brandId);
    
    console.log("brandProduct ss", brandProduct);

  return (
    <ProductsBrandsCardContainer products={brandProduct} />
  );
}

export default ProductBrandsPage;