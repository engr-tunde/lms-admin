import { useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";

const ImageSlider = ({ variants }) => {
  const [isImageModalOpen, setisImageModalOpen] = useState(false)
  let images = [];
  variants?.forEach((element) => {
    element?.images?.forEach((imgData) => {
      images?.push(imgData?.url);
    });
  });
  const [currentImg, setcurrentImg] = useState(images[0]);

  const expandIcon = () => {
    return <FaExpandArrowsAlt size={15} />;
  };

  if (!images || !currentImg) return null;

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="relative w-full" onClick={() => setisImageModalOpen(true)}>
        <img
          src={
            currentImg
              ? currentImg
              : null
          }
          alt=""
          className="object-cover w-full h-[250px]"
        />
        <button 
          className="absolute bottom-0 right-0 border-[1px] p-1 text-black border-black bg-white cursor-pointer"
          onClick={() => setisImageModalOpen(true)}
        >
          {expandIcon()}
        </button>
      </div>

      <div className="w-full overflow-x-scroll">
        <div className="w-full flex items-center justify-between gap-3">
          {images?.map((ele, i) => (
            <div key={i} className="min-w-[200px] h-[200px] cursor-pointer">
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

      {isImageModalOpen && (
        <div 
         className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" 
         onClick={() => {setisImageModalOpen(false)}}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={currentImg}
              alt="Expanded"
              className="object-contain max-w-full max-h-full"
            />
            <button
              onClick={() => setisImageModalOpen(false)}
              className="absolute top-4 right-4 text-white font-black p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;