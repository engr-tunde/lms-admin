import { Eye } from "lucide-react";
import { EditIcon, MailIcon, TrashIcon } from "../globals/Icons";

const AdminsRowTemplate = ({ item }) => {
  return (
    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
            {item.avatar}
          </div>
          <div>
            <div className="font-medium text-gray-900">{item.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2 text-gray-500">
          <MailIcon className="w-4 h-4" />
          <span className="text-sm">{item.email}</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">  
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
          item.role === 'Super Admin' 
            ? 'bg-purple-100 text-purple-700' 
            : item.role === 'Admin'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-gray-100 text-gray-700'
        }`}>
          {item.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
          item.status === 'Active' 
            ? 'bg-emerald-100 text-emerald-700' 
            : item.status === 'Suspended'
              ? 'bg-red-100 text-red-700'
              : 'bg-gray-100 text-gray-700'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${
            item.status === 'Active' 
              ? 'bg-emerald-500' 
              : item.status === 'Suspended'
                ? 'bg-red-500'
                : 'bg-gray-500'
          }`} />
          {item.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.joinedDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.lastActive}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="flex items-center justify-end gap-2">
          <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <EditIcon className="w-4 h-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  )
}


export default AdminsRowTemplate;