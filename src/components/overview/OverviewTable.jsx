import TableSearch from "../globals/TableSearch";
import Table from "../globals/Table";
import OverviewRowTemplate from "./OverviewTableRowTemplate.jsx";
import { overviewColumnHeader, overviewData } from "../../data/overviewData.js";

function OverviewTable({ filteredData, setfilteredData, originalArr }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">Recent order</div>
        <div className="flex items-center cursor-pointer">
          <TableSearch
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
          />
        </div>
      </div>
      <Table
        columns={overviewColumnHeader}
        renderRow={(order, i) => (
          <OverviewRowTemplate
            key={order._id}
            order={order}
            i={i}
          />
        )}
        data={filteredData}
      />
    </div>
  );
}

export default OverviewTable;