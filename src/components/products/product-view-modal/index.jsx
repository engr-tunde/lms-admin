import { IoMdClose }from "react-icons/io";
import ImageSlider from "./ImageSlider"
import ProductViewDetails from "./Details"
import ProductViewFinancialBreakdown from "./FinancialBreakdown";
import VariantContainer from "./VariantContainer"

const ProductViewModal = ({ show, onClose }) => {

  if (!show) return null;
  return (
    <div 
      className="fixed inset-0 z-20 flex items-stretch justify-end bg-black/25 bg-opacity-40 w-full"
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 shadow-lg w-1/2 flex flex-col gap-6 overflow-y-auto h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky -top-6 z-40 w-full bg-white py-4">
          <button className="ml-auto block">
            <IoMdClose 
              size={20} 
              onClick={(e) => {e.stopPropagation(); onClose()}} 
              className=""
            />
          </button>
        </div>
        <div className="text-lg font-semibold">Product Details</div>
        <ImageSlider />
        <ProductViewDetails />
        <VariantContainer />
        <ProductViewFinancialBreakdown/>
      </div>
    </div>
  )
}

export default ProductViewModal