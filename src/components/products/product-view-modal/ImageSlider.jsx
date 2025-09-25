import { FaExpandArrowsAlt } from "react-icons/fa";


const ImageSlider = () => {
  const expandIcon = () => {
    return <FaExpandArrowsAlt size={15} />
  }

  return (
    <div className="w-full grid grid-cols-3 gap-3">
      <div className="relative w-full col-span-3">
        <img src="/assets/images/product-images/product-image.png" alt="" className="object-cover w-full h-full" />
        <button className="absolute bottom-0 right-0 border-[1px] p-1 text-black border-black bg-white">
          {expandIcon()}
        </button>
      </div>
      <div className="relative w-full col-span-1">
        <img src="/assets/images/product-images/product-image2.png" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="relative w-full col-span-1">
        <img src="/assets/images/product-images/product-image3.png" alt="" className="object-cover w-full h-full" />
      </div>
      <div className="relative w-full col-span-1">
        <img src="/assets/images/product-images/product-image4.png" alt="" className="object-cover w-full h-full" />
      </div>
    </div> 
  )
}

export default ImageSlider;