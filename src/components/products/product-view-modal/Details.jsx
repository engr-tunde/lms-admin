import AppFormButton from "../../forms/buttons/AppFormButton"
import StatusCheck from "../../globals/StatusCheck"
import { useState } from "react"
import RejectionFormModal from "./RejectionFormModal";


const ProductViewDetails = () => {
  const [showRejectionForm, setShowRejectionForm] = useState(false);

  return (
    <>
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-lg font-bold">Off-White Grateful SS T-Shirt</span>
        <StatusCheck value="Pending approval" className="text-sm px-2 py-1" />
      </div>
      <div className="flex justify-between text-sm">
        <span>Category: Menswear</span>
        <span>Subcategory: Shirt</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="flex items-center">
          Color: 
          <span
          className="w-3 h-3 rounded-full border inline-block mx-1"
          style={{ backgroundColor: "Black" }}
          ></span>
          Black
        </span>
        <span>Total Qty: 200</span>
      </div>
    </div>
    <div>
      <span className="font-semibold text-sm">Available Sizes</span>
      <div className="grid grid-cols-4 gap-3">
        <SizesCard size="SS" quantity={46} />
        <SizesCard size="S" quantity={10} />
        <SizesCard size="M" quantity={30} />
        <SizesCard size="L" quantity={20} />
        <SizesCard size="L" quantity={20} />
        <SizesCard size="xxl" quantity={20} />
      </div>
      <div className="flex justify-end gap-2 mt-4">
        {/* <AppFormButton 
          title="Reject"
          className="px-3 border-merseBorder border-2 text-sm"
          // type="submit"
          isSubmitting={false}
          disabled={true}
          // onClick={() => setShowRejectionForm(true)}
        /> */}
        <button 
          className="px-6 py-1 border-merseBorder border-2 text-sm"
          onClick={() => setShowRejectionForm(true)}
        >
          Reject
        </button>
        <AppFormButton 
          title="Approve"
          className="px-6 py-1 text-white bg-black text-sm"
          // type="submit"
          isSubmitting={false}
          disabled={true}
        />
      </div>
      <div className="flex flex-col">
        <TextsCard 
          textHeader="Product Description"
          textBody="A bold thigh-high slit adds a hint of allure, perfect for showcasing statement heels or elongating the silhouette. Whether you're attending a formal evening soirée, an upscale wedding, or a special celebration, this dress is your go-to for elevated style and undeniable presence."
        />
        <TextsCard 
          textHeader="Fabric and Care"
          textBody="Machine wash cold with like colors. Do not bleach. Tumble dry low or hang to dry. Warm iron if needed."
        />
        <TextsCard 
          textHeader="Estimated Delivery Time"
          textBody="2-3 Days"
        />
      </div>
    </div>
    <RejectionFormModal show={showRejectionForm} onClose={() => setShowRejectionForm(false)} />
    </>
  )
}

export default ProductViewDetails


const SizesCard = ({ size, quantity }) => {
  return (
    <div className="border-[1px] border-merseBorder p-2 flex flex-col">
      <span className="font-semibold text-sm">{size.toUpperCase()}</span>
      <span className="text-sm">Qty: {quantity}</span>
    </div>
  )
}

const TextsCard = ({ textHeader, textBody }) => {
    return (
      <div className="p-2 flex flex-col">
        <span className="text-sm font-semibold">{textHeader}</span>
        <span className="text-sm">{textBody}</span>
      </div>
    )
}