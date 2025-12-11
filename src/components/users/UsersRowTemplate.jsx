import { MailIcon, TrashIcon } from "../globals/Icons";
import StatusCheck from "../globals/StatusCheck";
import { capitalize, compactDateFormatter, errorNotification, successNotification } from "../../utils/helpers";
import DeleteUsersModal from "./DeleteUsersModal";
import { unblockUser } from "../../api";
import { useState } from "react";
import { UserX, UserPlus } from "lucide-react";
import BlockUserModal from "./BlockUserModal";


const UsersRowTemplate = ({ item, mutate }) => {
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleUnblock = async () => {
    const payload = {
      name: item?.name, 
      email:item?.email, 
      username: item?.username, 
      password: item?.password,
    }
    const response = await unblockUser({ payload }, item?._id);
    
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      mutate();
    } else {
      errorNotification(response?.data?.message);
    }
  };

  return (
    <>
    <tr key={item?._id} className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium text-gray-900">
          {capitalize(item?.name)}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2 text-gray-500">
          <MailIcon className="w-4 h-4" />
          <span className="text-sm">{item?.email}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusCheck 
          value={capitalize(item?.status)} 
          ticker={true} 
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {compactDateFormatter(item?.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex items-center justify-end gap-2">
          <button 
            title={`${item?.status === "active" ? "Block User" : item?.status === "blocked" ? "Activate User" : null}`}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={item?.status === "active" ? 
              () => setShowBlockModal(true) : 
              item?.status === "blocked" ? 
              () => handleUnblock() : null
            }
          >
            {item?.status === "active" && <UserX className="w-4 h-4" />}
            {item?.status === "blocked" && <UserPlus className="w-4 h-4" />}
          </button>
          <button 
            title="Delete User"
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            onClick={() => setShowDeleteModal(true)}
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
    {showBlockModal &&
      <BlockUserModal
        setShowBlockModal={setShowBlockModal}
        userData={item}
        mutate={mutate}
      />
    }
    {showDeleteModal &&
      <DeleteUsersModal
        setShowDeleteModal={setShowDeleteModal}
        userData={item}
        mutate={mutate}
      />
    }
    </>
  )
}


export default UsersRowTemplate;