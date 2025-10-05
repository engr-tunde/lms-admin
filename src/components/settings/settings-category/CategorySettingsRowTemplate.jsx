import DeleteBrandCategoryModal from "./DeleteBrandCategoryModal";
import { IoEllipsisVertical } from "react-icons/io5";
import { useEffect, useRef, useState } from "react"
import { capitalize, compactDateFormatter } from "../../../utils/helpers";


function CategorySettingsRowTemplate(item, i, openIndex, setOpenIndex) {
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
  const actionRef = useRef();

  const isOpen = openIndex === i;
  const handleActionClick = () => setOpenIndex(isOpen ? null : i);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (actionRef.current && !actionRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  

  return (
    <>
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{capitalize(item.name)}</td>
      <td className="py-4 text-sm">{12}</td>
      <td className="py-4 text-sm">{compactDateFormatter(item.createdAt || item.created_at) || null}</td>
      <td className="py-4 text-sm">
        <div 
          className="relative cursor-pointer"
          ref={actionRef}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleActionClick();
            }}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {isOpen && (
            <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col top-6 left-0 bg-white shadow-xl">
              <button
                className="text-sm text-left px-5 py-2"
              >
                Edit
              </button>
              <button
                className="text-sm text-left px-5 py-2"
                onClick={() => setShowDeleteCategoryModal(true)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
    <DeleteBrandCategoryModal show={showDeleteCategoryModal} onClose={() => setShowDeleteCategoryModal(false)} categoryToDelete={item.name} />
    </>
  );
}


export default CategorySettingsRowTemplate;



