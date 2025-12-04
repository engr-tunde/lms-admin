import { useEffect, useState } from 'react';
import Pagination from '../globals/Pagination';
import AdminsTable from "./AdminsTable"
import { NoAdminsAvailable } from '../globals/NoValuesPage';
import { fetchAllAdmins } from "../../api/index"
import Loader from "../globals/Loader"
import ErrorWidget from "../globals/ErrorWidget"



function ManageAdmins() {
  const [filteredData, setFilteredData] = useState()
  const [originalArr, setOriginalArr] = useState();

  const { admins, adminsLoading, adminsError } = fetchAllAdmins();
  console.log("Admins:", admins);


  useEffect(() => {
    if (admins?.data?.length) {
      setOriginalArr(admins?.data)
      setFilteredData(admins?.data)
    }
  }, [admins?.data])

  if (adminsLoading) return <Loader/>
  if (adminsError) return <ErrorWidget error={admins?.message}/>

  return (
    <div className="mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {filteredData ? (
          <>
            <AdminsTable 
              filteredData={filteredData}
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