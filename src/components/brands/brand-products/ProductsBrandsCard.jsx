import { useState } from "react";
import StatusCheck from "../../globals/StatusCheck";
import ProductViewModal from "../../products/ProductViewModal";
import { capitalize } from "../../../utils/helpers";

function ProductsBrandsCard({ data, mutate }) {
  const [showModal, setShowModal] = useState(false);

  let quantity = 0;
  data?.variants?.forEach((ele) => {
    ele?.sizes?.forEach((size) => {
      quantity += size.quantity;
    });
  });

  return (
    <>
      <div
        className="w-full col-span-1 flex flex-col items-start gap-2"
        onClick={() => setShowModal(true)}
      >
        <div className="w-full">
          <img
            src={
              data?.images.length
                ? data?.images[0]?.url
                : data?.variants[0]?.images[0]?.url
                ? data?.variants[0]?.images[0]?.url
                : "/assets/images/brand-image1.png"
            }
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full flex justify-start">
          <StatusCheck value={capitalize(data?.approvalStatus)} className="text-sm px-2 py-1" />
        </div>
        <div className="flex flex-col gap[-2px] w-full text-md">
          <span>{capitalize(data?.brandName)}</span>
          <span className="font-semibold">{capitalize(data?.title)}</span>
        </div>
        <div className="flex justify-between w-full text-xs font-semibold">
          <span>{formatter(data?.pricing?.sellingPrice)}</span>
          <span>{quantity}</span>
        </div>
      </div>
      <ProductViewModal
        show={showModal}
        onClose={() => setShowModal(false)}
        data={data}
        mutate={mutate}
      />
    </>
  );
}

export default ProductsBrandsCard;
