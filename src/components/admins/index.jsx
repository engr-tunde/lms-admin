import { useState } from 'react';
import Pagination from '../globals/Pagination';
import AdminsTable from "./AdminsTable"
import { adminsColumnHeader, adminsData } from "../../data/adminsData";
import { NoAdminsAvailable } from '../globals/NoValuesPage';


function ManageAdmins() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRole, setFilterRole] = useState('all');

  const filteredAdmins = adminsData.filter(admin => {
    if (filterStatus !== 'all' && admin.status !== filterStatus) return false;
    if (filterRole !== 'all' && admin.role !== filterRole) return false;
    return true;
  });

  return (
    <div className="mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {filteredAdmins.length ? (
          <>
            <AdminsTable 
              filteredAdmins={filteredAdmins}
              adminsColumnHeader={adminsColumnHeader}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              filterRole={filterRole}
              setFilterRole={setFilterRole}
            />
            <Pagination />
          </>
        ) : (
          <NoAdminsAvailable />
        )}
      </div>
    </div>
  );
}

export default ManageAdmins;



/// To be Used Later 



// <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex gap-8">
//             <button
//               onClick={() => setActiveTab('admins')}
//               className="relative pb-4 pt-6"
//             >
//               <div className="flex items-center gap-2">
//                 <Shield className="w-5 h-5" />
//                 <span className={`font-medium transition-colors ${
//                   activeTab === 'admins' ? 'text-gray-900' : 'text-gray-500'
//                 }`}>
//                   Admins Management
//                 </span>
//               </div>
//               {activeTab === 'admins' && (
//                 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
//               )}
//             </button>
//             <button
//               onClick={() => setActiveTab('students')}
//               className="relative pb-4 pt-6"
//             >
//               <div className="flex items-center gap-2">
//                 <Users className="w-5 h-5" />
//                 <span className={`font-medium transition-colors ${
//                   activeTab === 'students' ? 'text-gray-900' : 'text-gray-500'
//                 }`}>
//                   Users Management
//                 </span>
//               </div>
//               {activeTab === 'students' && (
//                 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>