import { useState } from "react";
import UsersRowTemplate from "./UsersRowTemplate.jsx";
import TableSearch from "../globals/TableSearch.jsx";
import Table from "../globals/Table.jsx";

function UsersTable({ filteredData, setfilteredData, originalArr, mutate }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const searchable = [
    "fullName", 
    "email", 
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All Buyers</div>
        <div className="flex items-center cursor-pointer">
            <TableSearch 
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              searchable={searchable}
            />
        </div>
      </div>
      <Table 
        columns={userTableColumnHeader}
        renderRow={(user, i) => (
            <UsersRowTemplate
              key={user?._id}
              user={user}
              i={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              mutate={mutate}
            />
          )}
        data={filteredData}
      />
    </div>
  );
}

export default UsersTable;





export const userTableColumnHeader = [
    {
        header: "Buyer Name", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Email Address", 
        className: "text-sm font-medium text-merseLightText"
    }, 
    {
        header: "Orders Placed", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Total Spent", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Last active", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Status", 
        className: "text-sm font-medium text-merseLightText hidden lg:table-cell"
    }, 
    {
        header: "Actions", 
        className: "text-sm font-medium text-merseLightText"
    }, 
]