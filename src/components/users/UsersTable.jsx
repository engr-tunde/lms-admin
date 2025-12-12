import { DownloadIcon } from "../globals/Icons";
import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import StatusFilter from "../globals/StatusFilter";
import UsersRowTemplate from "./UsersRowTemplate"
import { usersColumnHeader } from "../../data/userData"
import Pagination from "../globals/Pagination";
import { useEffect, useState } from "react";
import { handleExportPDF } from "../../utils/helpers";

const UsersTable = ({ filteredData, setFilteredData, originalArr, setOriginalArr, mutate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
    const itemsPerPage = 10;
    const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData?.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  
    useEffect(() => {
      setCurrentPage(1);
    }, [filteredData]);
  
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
          <button 
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            onClick={() => handleExportPDF({ data: filteredData, columns: usersColumnHeader, pdfTitle: 'users' })}
          >
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
        data={currentItems}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default UsersTable;