import AddedProductBrandsCard from "./AddedProductBrandsCard";

function AddedProductBrandsCardContainer() {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-start">
        <div className="font-semibold">Newly Added Products</div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        <AddedProductBrandsCard
        productImage = "/assets/images/product-image2.png"
        productBrand="StylishCo"
        productStatus="Awaiting approval"
        productName="Off-White Grateful SS T-Shirt"
        productQuantity="20"
        />

        <AddedProductBrandsCard
        productImage = "/assets/images/product-image2.png"
        productBrand="Ashluxe"
        productStatus="Awaiting approval"
        productName="Off-White Grateful SS T-Shirt"
        productQuantity="18"
        />

        <AddedProductBrandsCard
        productImage = "/assets/images/product-image2.png"
        productBrand="Banke kuku"
        productStatus="Awaiting approval"
        productName="Off-White Grateful SS T-Shirt"
        productQuantity="20"
        />
      </div>
    </div>
  );
}

export default AddedProductBrandsCardContainer;


