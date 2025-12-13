import { X } from "lucide-react";
import { errorNotification, successNotification } from "../../../../utils/helpers";
import { deleteMaterial } from "../../../../api";


const DeleteMaterialModal = ({ setShowDeleteModal, section, mutate}) => {

  const handleDeleteSection = async () => {
    const response = await deleteMaterial(section?._id)
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      mutate();
    } else {
      errorNotification(response?.data?.message);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/2 flex flex-col gap-3 rounded-lg">
        <div>
          <button className="ml-auto block">
            <X size={20} onClick={() => setShowDeleteModal(false)} className="" />
          </button>
        </div>
        <div className="flex justify-between gap-4 h-full">
          <div className="w-full h-full">
            {`Are you sure you want to delete this ${section?.title}? You will lose all the attached videos and articles too. This action cannot be undone.`}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => setShowDeleteModal(false)}
            className="edit-button"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleDeleteSection(section?._id)}
            className="delete-button"
          >
            Delete
          </button>
          </div>
      </div>
    </div>
  )
}

export default DeleteMaterialModal