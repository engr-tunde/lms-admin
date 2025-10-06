import DeleteBrandCategoryModal from "./DeleteBrandCategoryModal";
import { IoEllipsisVertical } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import {
  capitalize,
  compactDateFormatter,
  useToggleOpen,
} from "../../../utils/helpers";

function CategorySettingsRowTemplate({ item, i, openIndex, setOpenIndex }) {
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
  const { isOpen, toggle, close, ref } = useToggleOpen(
    openIndex,
    setOpenIndex,
    i
  );

  return (
    <>
      <tr key={i} className="border-1 border-t border-merseBorder">
        <td className="py-4 text-sm">{capitalize(item.name)}</td>
        <td className="py-4 text-sm">{12}</td>
        <td className="py-4 text-sm">
          {compactDateFormatter(item.createdAt || item.created_at) || null}
        </td>
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
              <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col top-6 right-0 bg-white shadow-xl border-[1px]">
                <button className="text-sm text-left px-5 py-2" onClick={close}>
                  Edit
                </button>
                <button
                  className="text-sm text-left px-5 py-2"
                  onClick={() => {
                    setShowDeleteCategoryModal(true);
                    close();
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </td>
      </tr>
      <DeleteBrandCategoryModal
        show={showDeleteCategoryModal}
        onClose={() => setShowDeleteCategoryModal(false)}
        categoryToDelete={item.name}
      />
    </>
  );
}

export default CategorySettingsRowTemplate;
