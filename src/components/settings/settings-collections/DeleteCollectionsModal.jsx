import { IoMdClose }from "react-icons/io";
import { deleteSubcategory } from "../../../api";
import { errorNotification, successNotification } from "../../../utils/helpers";


const DeleteCollectionsModal = ({ show, onClose, collectionToDelete, collectionToDeleteId }) => {
  if (!show) return null;
  
  
const handleDelete = async () => {
    const response = await deleteSubcategory(collectionToDeleteId);
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message || "Collection deleted");
      onClose();
    } else {
      errorNotification(response?.data?.message || "Error deleting collection");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/3 flex flex-col gap-3">
        <div>
          <button className="ml-auto block">
            <IoMdClose size={20} onClick={onClose} className="" />
          </button>
        </div>
        <div className="font-semibold text-sm">
          Delete Subcategory
        </div>
        <div className="flex justify-between gap-4 h-full">
          <div className="w-full h-full text-sm">
            {`Are you sure you want to delete "${collectionToDelete}"? This might affect the brands that have selected it`}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 border-2 text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="px-3 py-1 text-white bg-red-600 text-sm"
          >
            Delete
          </button>
          </div>
      </div>
    </div>
  )
}

export default DeleteCollectionsModal