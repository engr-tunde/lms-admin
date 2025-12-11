import { errorNotification, successNotification } from "../../utils/helpers";
import { blockUser } from "../../api";
import { X } from "lucide-react";


const BlockUserModal = ({ setShowBlockModal, userData, mutate}) => {

  const handleBlock = async () => {
    const payload = {
      name: userData?.name, 
      email:userData?.email, 
      username: userData?.username, 
      password: userData?.password,
    }
    const response = await blockUser({ payload }, userData?._id);
    
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      mutate();
      setShowBlockModal(false);
    } else {
      errorNotification(response?.data?.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/2 flex flex-col gap-3 rounded-lg">
        <div>
          <button className="ml-auto block">
            <X size={20} onClick={() => setShowBlockModal(false)} className="" />
          </button>
        </div>
        <div className="flex justify-between gap-4 h-full">
          <div className="w-full h-full">
            {`Are you sure you want to block "${userData?.name}"?`}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => setShowBlockModal(false)}
            className="edit-button"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleBlock()}
            className="delete-button"
          >
            Block User
          </button>
          </div>
      </div>
    </div>
  )
}

export default BlockUserModal