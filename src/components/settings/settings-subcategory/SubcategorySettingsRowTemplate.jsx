import { IoEllipsisVertical } from "react-icons/io5";
import DeleteSubcategoryModal from "./DeleteSubcategoryModal";
import { useState } from "react";
import { capitalize, compactDateFormatter } from "../../../utils/helpers";


function SubcategorySettingsRowTemplate(item, i) {
  const [actionOpen, setActionOpen] = useState(null)
  const [showDeleteSubcategoryModal, setShowDeleteSubcategoryModal] = useState(false);
  // const [subcategoryToDelete, setSubcategoryToDelete] = useState(null);
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  }

  return (
    <>
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{capitalize(item?.name)}</td>
      <td className="py-4 text-sm">{capitalize(item?.category?.name)}</td>
      <td className="py-4 text-sm">{compactDateFormatter(item.created_at || item.createdAt) || null}</td>
      <td className="py-4 text-sm">
        <div className="relative cursor-pointer">
          <button
            onClick={() => handleActionClick(i)}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {actionOpen === i && (
            <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col top-6 left-0 bg-white shadow-xl">
              <button
                className="text-sm text-left px-5 py-2"
              >
                Edit
              </button>
              <button
                className="text-sm text-left px-5 py-2"
                onClick={() => setShowDeleteSubcategoryModal(true)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
    <DeleteSubcategoryModal 
      show={showDeleteSubcategoryModal} 
      onClose={() => setShowDeleteSubcategoryModal(false)} 
      subcategoryToDelete={item.name} 
      subcategoryToDeleteId={item.id} 
    />
    </>
  );
}

export default SubcategorySettingsRowTemplate;