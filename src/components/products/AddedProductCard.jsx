import { useState } from "react";
import { capitalize } from "../../utils/helpers";
import ProductViewModal from "./ProductViewModal";

function NewlyAddedProductCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  let quantity = 0;
  data?.variants?.forEach((ele) => {
    ele?.sizes?.forEach((size) => {
      quantity += size.quantity;
    });
  });

  const productImage = () =>  (
    data?.images.length ? 
    data?.images[0]?.url : 
    data?.variants[0]?.images?.length ? 
    data?.variants[0]?.images[0]?.url : 
    "/assets/images/product-placeholder2.png"
  )


  return (
    <div className="w-full col-span-1 border-[1px] border-merseBorder p-3 flex justify-between gap-3">
      <div className="w-[25%]">
        <img src={productImage()} alt={``} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-1 w-[75%]">
        <div className="flex justify-end"> 
          <span className="text-merseLightText text-xs">{capitalize(data?.approvalStatus)}</span>
        </div>
        <div className="flex flex-col -gap-1">
            <span className="text-sm text-merseLightText">{capitalize(data?.brandName)}</span>
          <span className="text-sm">{capitalize(data?.title)}</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-sm">Qty: {quantity}</span>
          <span 
            className="border-2 px-1 text-[13px] cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            View details
          </span>
        </div>
      </div>
      <ProductViewModal
        show={showModal}
        onClose={() => setShowModal(false)}
        data={data}
      />
    </div>
  );
}


export default NewlyAddedProductCard;
