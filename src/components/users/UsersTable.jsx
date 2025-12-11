import { DownloadIcon } from "../globals/Icons";
import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import StatusFilter from "../globals/StatusFilter";
import UsersRowTemplate from "./UsersRowTemplate"
import { usersColumnHeader } from "../../data/userData"

const UsersTable = ({ filteredData, setFilteredData, originalArr, setOriginalArr, mutate }) => {
  
  const userStatus = [
    { title: "All Status", value: "all" },
    { title: "Active", value: "active" },
    { title: "Suspended", value: "suspended" },
  ];
  
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TableSearch 
            originalArr={originalArr}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            searchable={['name', 'email']}
          />
        </div>

        <div className="flex items-center gap-3">
          <StatusFilter
            originalArr={originalArr}
            setFilteredData={setFilteredData}
            filterArr={userStatus}
            filterKey = "status"
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
            key={item?._id}
            item={item}
            mutate={mutate}
          />
        )}
        columns={usersColumnHeader}
        data={filteredData}
      />
    </div>
  );
}

export default UsersTable;