import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import OverviewRowTemplate from "./OverviewTableRowTemplate.jsx";
import { overviewColumnHeader, overviewData } from "../../data/overviewData.js";

function OverviewTable() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">Recent order</div>
        <div className="flex items-center cursor-pointer">
          <TableSearch className="" />
        </div>
      </div>
      <Table
        columns={overviewColumnHeader}
        renderRow={OverviewRowTemplate}
        data={overviewData}
      />
    </div>
  );
}

export default OverviewTable;