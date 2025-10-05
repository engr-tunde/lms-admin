import StatusCheck from "../../globals/StatusCheck";
import { useState } from "react";
import RejectionFormModal from "./RejectionFormModal";
import { approveRejectProduct } from "../../../api";
import { capitalize, errorNotification, successNotification } from "../../../utils/helpers";

const ProductViewDetails = ({ data, mutate }) => {
  const [showRejectionForm, setShowRejectionForm] = useState(false);
  let quantity = 0;
  data?.variants?.forEach((ele) => {
    ele?.sizes?.forEach((size) => {
      quantity += size.quantity;
    });
  });

  const handleApproveProduct = async () => {
    const response = await approveRejectProduct(
      {
        // rejectReason: values?.rejectReason,
        approvalStatus: "approved",
      },
      data?._id
    );
    console.log("response", response);
    if (response?.status?.toString()?.includes("20")) {
      successNotification(response?.data?.message);
      onClose();
      mutate();
    } else {
      errorNotification(response?.data?.message[0]);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {capitalize(data?.title)}
          </span>
          <StatusCheck
            value={capitalize(data?.approvalStatus)}
            className="text-sm px-2 py-1"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>Category: {data?.category?.name}</span>
          <span>Subcategory: {data?.subcategory?.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="">Colors:</div>
            <div className="flex gap-1">
              {data?.variants?.map((ele, i) => (
                <span
                  key={i}
                  className="w-5 h-5 rounded-full border inline-block"
                  style={{
                    backgroundColor: ele?.color?.toString()?.toLowerCase(),
                  }}
                ></span>
              ))}
            </div>
          </div>
          <span>Total Qty: {quantity}</span>
        </div>
      </div>
      <div>
        {(data.sizes?.length || data?.hasVariants) ? (
          <div className="w-full">
            <span className="font-semibold text-sm">Available Sizes</span>
            <div className="grid grid-cols-4 gap-3">
              {
                data.sizes.length ? (
                  data?.sizes?.map((ele, i) => (
                <SizesCard
                  key={i}
                  size={ele?.label?.toUpperCase()}
                  quantity={ele?.quantity}
                />))
                ) : (
                   data?.variants?.map((variant, i) => variant?.sizes?.map((ele, j) => (
                    <SizesCard
                      key={`${i}-${j}`}
                      size={ele?.label?.toUpperCase()}
                      quantity={ele?.quantity}
                    />
                    )))
                ) 
              }
            </div>
          </div>) : null
        }
        <div className="flex justify-end gap-2 mt-4">
          {
            data?.approvalStatus !== "rejected" && (
              <button
                className="px-6 py-1 border-merseBorder border-2 text-sm"
                onClick={() => setShowRejectionForm(true)}
              >
                Reject
              </button>
            )
          }
          {
            data?.approvalStatus !== "approved" && (
              <button
                className="px-6 py-1 text-white bg-black text-sm"
                onClick={handleApproveProduct}
              >
                Approve
              </button>
            )
          }
        </div>
        <div className="flex flex-col">
          {data?.description && 
            <TextsCard
              textHeader="Product Description"
              textBody={data?.description}
            />
          }
          {data?.keyFeatures?.length > 0 && (
            <TextsCard
              textHeader="Key Features"
              textBody={data?.keyFeatures?.join("\n")}
            />
          )}          
        </div>
      </div>
      <RejectionFormModal
        show={showRejectionForm}
        onClose={() => setShowRejectionForm(false)}
        data={data}
      />
    </>
  );
};

export default ProductViewDetails;

const SizesCard = ({ size, quantity }) => {
  return (
    <div className="border-[1px] border-merseBorder p-2 flex flex-col">
      <span className="font-semibold text-sm">{size.toUpperCase()}</span>
      <span className="text-sm">Qty: {quantity}</span>
    </div>
  );
};

const TextsCard = ({ textHeader, textBody }) => {
  return (
    <div className="p-2 flex flex-col">
      <span className="text-sm font-semibold">{textHeader}</span>
      <span className="text-sm">{textBody}</span>
    </div>
  );
};
