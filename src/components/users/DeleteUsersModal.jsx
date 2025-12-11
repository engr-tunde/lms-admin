import { errorNotification, successNotification } from "../../utils/helpers";
import { deleteUser } from "../../api";
import { X } from "lucide-react";


const DeleteUsersModal = ({ setShowDeleteModal, userData, mutate}) => {

  const handleDelete = async () => {
    const response = await deleteUser(userData?._id);
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      mutate();
      setShowDeleteModal(false);
    } else {
      errorNotification(response?.data?.message);
    }
  };

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
            {`Are you sure you want to delete "${userData?.name}"? This action cannot be undone.`}
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
            onClick={handleDelete}
            className="delete-button"
          >
            Delete
          </button>
          </div>
      </div>
    </div>
  )
}

export default DeleteUsersModal