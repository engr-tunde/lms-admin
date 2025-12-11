import { EditIcon, MailIcon, TrashIcon } from "../globals/Icons";
import { capitalize, compactDateFormatter } from "../../utils/helpers"
import AddAdminModal from "./AddAdminModal";
import { useState } from "react";
import StatusCheck from "../globals/StatusCheck"
import DeleteAdminModal from "./DeleteAdminModal";

const AdminsRowTemplate = ({ item, mutate }) => {
  const [showAddModal, setShowAddModal] = useState()
  const [showDeleteModal, setShowDeleteModal] = useState()
  

  return (
    <>
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="font-medium text-gray-900">{item?.name}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2 text-gray-500">
          <MailIcon className="w-4 h-4" />
          <span className="text-sm">{item?.email}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusCheck ticker value={capitalize(item?.status)}/>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {compactDateFormatter(item?.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex items-center justify-end gap-2">
          <button 
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setShowAddModal(true)}
          >
            <EditIcon className="w-4 h-4" />
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            onClick={() => setShowDeleteModal(true)}
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
    {showAddModal &&
      <AddAdminModal
        setShowAddModal={setShowAddModal}
        adminData={item}
        mutate={mutate}
      />
    }
    {showDeleteModal &&
      <DeleteAdminModal
        setShowDeleteModal={setShowDeleteModal}
        adminData={item}
        mutate={mutate}
      />
    }
    </>
  )
}


export default AdminsRowTemplate;