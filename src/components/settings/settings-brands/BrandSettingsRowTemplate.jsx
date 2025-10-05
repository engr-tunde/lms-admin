import { IoEllipsisVertical } from "react-icons/io5";
import DeleteBrandModal from "./DeleteBrandModal";
import { useEffect, useRef, useState } from "react";
import { useToggleOpen } from "../../../utils/helpers";

function BrandSettingsRowTemplate(item, i, openIndex, setOpenIndex) {
  const [showDeleteBrandModal, setShowDeleteBrandModal] = useState(false);
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);

  return (
    <>
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{item.brandType}</td>
      <td className="py-4 text-sm">{item.dateCreated}</td>
      <td className="py-4 text-sm">
        <div className="relative cursor-pointer" ref={ref}>
          <button
           onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {isOpen && (
            <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col right-0 bg-white shadow-xl border-[1px]">
              <button
               className="text-sm text-left px-5 py-2"
               onClick={close}
              >
                Edit
              </button>
              <button
               className="text-sm text-left px-5 py-2"
               onClick={() => {setShowDeleteBrandModal(true); close()}}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
    <DeleteBrandModal show={showDeleteBrandModal} onClose={() => setShowDeleteBrandModal(false)} brandToDelete={item.brandType} />
    </>
  );
}
export default BrandSettingsRowTemplate;