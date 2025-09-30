import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import { memberColumnHeader, memberData } from "../../data/memberData.js";
import MemberTableRowTemplate from "./MemberTableRowTemplate.jsx";
import { useEffect, useState } from "react";

function MemberTable({
  data,
  setsearch,
  search,
  filteredData,
  setfilteredData,
  originalArr,
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end">
        <div className="cursor-pointer">
          <TableSearch
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
          />
        </div>
      </div>
      <Table
        columns={memberColumnHeader}
        renderRow={MemberTableRowTemplate}
        data={filteredData}
      />
    </div>
  );
}

export default MemberTable;
