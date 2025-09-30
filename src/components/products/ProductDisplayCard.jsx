import { formatter } from "../../utils/helpers";
import StatusCheck from "../globals/StatusCheck";
import ProductViewModal from "./ProductViewModal";
import { useState } from "react";

function ProductDisplayCard({ data }) {
  // console.log("data", data);
  const [showModal, setShowModal] = useState(false);

  let quantity = 0;
  data?.sizes.forEach((size) => {
    quantity += size.quantity;
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
                : "/assets/images/brand-image1.png"
            }
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full flex justify-start">
          <StatusCheck
            value={data?.approvalStatus}
            className="text-sm px-2 py-1"
          />
        </div>
        <div className="flex flex-col gap[-2px] w-full text-md">
          <span>{data?.brandName}</span>
          <span className="font-semibold">{data?.title}</span>
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
      />
    </>
  );
}

export default ProductDisplayCard;
