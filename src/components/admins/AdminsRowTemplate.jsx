import { Eye } from "lucide-react";
import { EditIcon, MailIcon, TrashIcon } from "../globals/Icons";
import { capitalize, compactDateFormatter } from "../../utils/helpers"
import AddAdminModal from "./AddAdminModal";
import { useState } from "react";
import StatusCheck from "../globals/StatusCheck"

const AdminsRowTemplate = ({ item }) => {
  const [showAddModal, setShowAddModal] = useState()

  return (
    <>
    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="font-medium text-gray-900">{item.name}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2 text-gray-500">
          <MailIcon className="w-4 h-4" />
          <span className="text-sm">{item.email}</span>
        </div>
      </td>
      {/* <td className="px-6 py-4 whitespace-nowrap">  
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          item.role === 'Super Admin' 
            ? 'bg-purple-100 text-purple-700' 
            : item.role === 'Admin'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-gray-100 text-gray-700'
        }`}>
          {item.role}
        </span>
      </td> */}
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusCheck ticker value={capitalize(item.status)}/>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {compactDateFormatter(item.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex items-center justify-end gap-2">
          <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setShowAddModal(true)}
          >
            <EditIcon className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
    {showAddModal &&
      <AddAdminModal
        setShowAddModal={setShowAddModal}
      />
    }
    </>
  )
}


export default AdminsRowTemplate;