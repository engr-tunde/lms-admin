import StatusCheck from "../globals/StatusCheck"
import ProductViewModal from "./product-view-modal";
import { useState } from "react";




function ProductDisplayCard({ productImage, productStatus, productBrand, productName, productPrice, productQuantity }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div 
      className="w-full col-span-1 flex flex-col items-start gap-2"
      onClick={() => setShowModal(true)}
    >
      <div className="w-full">
        <img src={productImage} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="w-full flex justify-start">
        <StatusCheck value={productStatus} className="text-sm px-2 py-1" />
      </div>
      <div className="flex flex-col gap[-2px] w-full text-md">
        <span>{productBrand}</span>
        <span className="font-semibold">{productName}</span>
      </div>
      <div className="flex justify-between w-full text-xs font-semibold">
        <span>{productPrice}</span>
        <span>{productQuantity}</span>
      </div>
      <ProductViewModal show={showModal} onClose={() => setShowModal(false)}/>
    </div>
  );
}

export default ProductDisplayCard;


