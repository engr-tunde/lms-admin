import { useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";

const ImageSlider = ({ variants }) => {
  let images = [];
  variants.forEach((element) => {
    element.images.forEach((imgData) => {
      images.push(imgData?.url);
    });
  });
  const [currentImg, setcurrentImg] = useState(images[0]);

  const expandIcon = () => {
    return <FaExpandArrowsAlt size={15} />;
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="relative w-full">
        <img
          src={
            currentImg
              ? currentImg
              : "/assets/images/product-images/product-image.png"
          }
          alt=""
          className="object-cover w-full h-[250px]"
        />
        <button className="absolute bottom-0 right-0 border-[1px] p-1 text-black border-black bg-white">
          {expandIcon()}
        </button>
      </div>

      <div className="w-full overflow-x-scroll">
        <div className="w-full flex items-center justify-between ">
          {images?.map((ele, i) => (
            <div key={i} className="relative col-span-1 w-full lg:w-[33%]">
              <img
                src={ele}
                alt=""
                className="object-cover w-full h-full"
                onClick={() => setcurrentImg(ele)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
