import { ChevronDownIcon, DownloadIcon } from "../globals/Icons";
import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import StatusFilter from "../globals/StatusFilter";
import { adminsColumnHeader, adminsData } from "../../data/adminsData";
import AdminsRowTemplate from "./AdminsRowTemplate";

const AdminsTable = ({ 
    filteredData, 
  }) => {
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TableSearch />
        </div>

        {/* <div className="flex items-center gap-3">
          <StatusFilter
            filter={filterRole} 
            setFilter={setFilterRole} 
            filterArr={adminRole} 
          />
          <StatusFilter
            filter={filterStatus} 
            setFilter={setFilterStatus} 
            filterArr={adminStatus} 
          />
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <DownloadIcon className="w-4 h-4" />
            Export
          </button>
        </div> */}
      </div>
      <Table
        renderRow={(item) => (
          <AdminsRowTemplate
            key={item?.id}
            item={item}
          />
        )}
        columns={adminsColumnHeader}
        data={filteredData}
      />
    </div>
  );
}

export default AdminsTable;