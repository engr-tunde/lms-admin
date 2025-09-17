import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { memberColumnHeader, memberData } from "../../data/memberData.js";
import MemberTableRowTemplate from "./MemberTableRowTemplate.jsx";

function MemberTable() {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end">
        <div className="cursor-pointer">
            <TableSearch />
        </div>
      </div>
      <Table 
      columns={memberColumnHeader}
      renderRow={MemberTableRowTemplate}
      data={memberData}
      />
    </div>
  );
}

export default MemberTable;
