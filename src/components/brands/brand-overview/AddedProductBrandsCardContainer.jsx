import NoDataPage from "../../globals/NoDataPage";
import AddedProductBrandsCard from "./AddedProductBrandsCard";

function AddedProductBrandsCardContainer({ products }) {

  const newlyAddedProducts = () => {
    let allProducts = products;
    if (!allProducts) return [];
    const sorted = [...allProducts].sort(
      (a, b) => new Date(b.created_at || b.createdAt) - new Date(a.created_at || a.createdAt)
    );
    return sorted.slice(0, 3);
  };
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-start">
        <div className="font-semibold">Newly Added Products</div>
      </div>
      {products?.length ? (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        <AddedProductBrandsCard
        newProducts={newlyAddedProducts()}
        productImage = "/assets/images/product-placeholder2.png"
        productBrand="StylishCo"
        productStatus="Awaiting approval"
        productName="Off-White Grateful SS T-Shirt"
        productQuantity="20"
        />

        <AddedProductBrandsCard
        newProducts={newlyAddedProducts()}
        productImage = "/assets/images/product-placeholder2.png"
        productBrand="Ashluxe"
        productStatus="Awaiting approval"
        productName="Off-White Grateful SS T-Shirt"
        productQuantity="18"
        />

        <AddedProductBrandsCard
        newProducts={newlyAddedProducts()}
        productImage = "/assets/images/product-placeholder2.png"
        productBrand="Banke kuku"
        productStatus="Awaiting approval"
        productName="Off-White Grateful SS T-Shirt"
        productQuantity="20"
        />
      </div>) : 
      <NoDataPage message="No recently added products found for this brand." />
      }
    </div>
  );
}

export default AddedProductBrandsCardContainer;


