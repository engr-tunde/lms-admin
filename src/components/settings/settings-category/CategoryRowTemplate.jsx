import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import {
  capitalize,
  compactDateFormatter,
  useToggleOpen,
} from "../../../utils/helpers";
import CreateUpdateCategoryModal from "./CreateUpdateCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";


function CategoryRowTemplate({ item, i, openIndex, setOpenIndex, mutate, subcategory }) {
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
  const [showUpdateCategoryModal, setShowUpdateCategoryModal] = useState(false);
  const { isOpen, toggle, close, ref } = useToggleOpen(
    openIndex,
    setOpenIndex,
    i
  );


  return (
    <>
      <tr className="border-1 border-t border-merseBorder">
        <td className="py-4 text-sm">{capitalize(item.name)}</td>
        <td className="py-4 text-sm">{item?.subcategoryCount}</td>
        <td className="py-4 text-sm">
          {item.createdAt || item.created_at ? 
          compactDateFormatter(item.createdAt || item.created_at) : ""
          }
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
                <button 
                  className="text-sm text-left px-5 py-2" 
                  onClick={() => {
                    setShowUpdateCategoryModal(true);
                    close();
                  }}
                >
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
      <CreateUpdateCategoryModal
        show={showUpdateCategoryModal}
        onClose={() => setShowUpdateCategoryModal(false)}
        mutate={mutate}
        isEdit={true}
        updateData={item}
      />
      <DeleteCategoryModal
        show={showDeleteCategoryModal}
        onClose={() => setShowDeleteCategoryModal(false)}
        categoryToDelete={item?.name}
        categoryToDeleteId={item?._id}
        mutate={mutate}
      />
    </>
  );
}

export default CategoryRowTemplate;
