import { fetchProductByBrand } from "../../../api";
import ProductsBrandsCardContainer from "./ProductsBrandsCardContainer";

function ProductBrandsPage({ brandId }) {
    const { brandProduct, brandProductLoading, brandProductError } = fetchProductByBrand(brandId);
    console.log("brandProduct ss", brandProduct);

  return (
    <ProductsBrandsCardContainer products={brandProduct} />
  );
}

export default ProductBrandsPage;