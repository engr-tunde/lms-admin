import { FaChevronUp } from "react-icons/fa"
import { capitalize } from "../../../utils/helpers"
import { useState } from "react"

const VariantContainer = ({ data }) => {
  const [toggleVariant, setToggleVariant] = useState(true)

  const ToggleButton = ({size}) => {
    return (
      <FaChevronUp size={size} className={`${toggleVariant ? "rotate-180 transition-transform" : "transition-transform"}`} />
    )
  }

  return (
    <div className="flex border-[1px] border-merseBorder flex flex-col p-3">
      <div className="flex justify-between text-sm font-semibold">
        <span>Variant</span>
        <button
         onClick={() => setToggleVariant(!toggleVariant)}
        >
          <ToggleButton size={15} />
        </button>
      </div>
      <div 
        className={`grid grid-cols-2 gap-6 mt-3 ${!toggleVariant ? "hidden" : ""}`}
      >
        {
          data?.variants?.map((variant, i) => (
            <Variant
             key={i}
             image={variant?.images?.length ? variant?.images[0]?.url : "/assets/images/product-placeholder.png"}
             product={capitalize(variant?.product ?? data?.title)}
             color={variant?.color || "N/A"}
             size={variant?.sizes?.map(size => size?.label)}
             quantity={variant?.sizes?.reduce((acc, size) => acc + size?.quantity, 0)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default VariantContainer


const Variant = ({image, product, color, size, quantity}) => {
  return (
    <div className="w-full flex gap-1 items-center border-[1px] border-merseBorder p-2">
      <div className="w-16 h-16 ">
        <img src={image} alt={``} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="font-semibold text-xs">{product}</div>
        <div className="flex justify-between w-full">
          <span className="flex items-center text-xs">
            Color: 
            <span
              className="w-3 h-3 rounded-full border inline-block mx-1"
              style={{ backgroundColor: color }}
            ></span>
            {color}
          </span>
          <div className="text-xs">
            Qty: {quantity}
          </div>
        </div>
        <span className="text-xs">
          Size: {Array.isArray(size) ? size.join(", ").toUpperCase() : size.toUpperCase()}
        </span>
      </div>
    </div>
  )
}