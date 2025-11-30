import { DownloadIcon } from "../globals/Icons";
import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import StatusFilter from "../globals/StatusFilter";
import UsersRowTemplate from "./UsersRowTemplate"

const UsersTable = ({
    filteredUsers, 
    usersColumnHeader, 
    filterStatus, 
    setFilterStatus
  }) => {


  const userStatus = [
    { title: "All Status", value: "all" },
    { title: "Active", value: "Active" },
    { title: "Suspended", value: "Suspended" },
  ];
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TableSearch />
        </div>

        <div className="flex items-center gap-3">
          <StatusFilter
            filter={filterStatus} 
            setFilter={setFilterStatus} 
            filterArr={userStatus} 
          />
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <DownloadIcon className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <Table
        renderRow={(item) => (
          <UsersRowTemplate
            key={item?.id}
            item={item}
          />
        )}
        columns={usersColumnHeader}
        data={filteredUsers}
      />
    </div>
  );
}

export default UsersTable;