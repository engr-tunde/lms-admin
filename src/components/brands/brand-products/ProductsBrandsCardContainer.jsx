import Search from "../../globals/Search"
import ProductsBrandsCard from "./ProductsBrandsCard"
import { formatter } from "../../../utils/helpers"
import { useState } from "react"


function ProductsBrandsCardContainer() {
  const [filter, setFilter] = useState("All Products")
  const filters = ["All Products", "Awaiting approval", "Approved", "Rejected"];

  const filterChildren = (children) => {
    return children.filter((child) => {
      if (!child.props?.productStatus) return true; // keep safe
      return filter === "All Products" || child.props.productStatus === filter;
    });    
  }

  const cards = [
    <ProductsBrandsCard
    productImage="/assets/images/brand-image1.png"
    productStatus = "Awaiting approval"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(1, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Rejected"
    productBrand="Banke kuku"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Awaiting approval"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Rejected"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Awaiting approval"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Approved"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Approved"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Approved"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Approved"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
    <ProductsBrandsCard
    productImage = "/assets/images/brand-image1.png"
    productStatus = "Awaiting approval"
    productBrand="StylishCo"
    productName="Off-White Grateful SS T-Shirt"
    productPrice={formatter(140000)?.slice(0, -3)}
    productQuantity={200}
    />,
  ]

  const filteredCards = filterChildren(cards);

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-between items-end mb-2">
        <div className="flex gap-6">
          {filters.map((status) => (
            <button 
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded ${
                filter === status ? "text-black" : "text-merseBorder"
            }`}
            >
              {status}
            </button>
          ))}
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {filteredCards}
      </div>
    </div>
  );
}

export default ProductsBrandsCardContainer;


