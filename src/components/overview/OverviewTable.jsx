// import { RiCoinLine, RiShoppingBag2Line } from "react-icons/ri";
import OverviewBrandRequest from "./OverviewBrandRequests";
// import { formatter } from "../../utils/helpers";
// import { TbTruckDelivery } from "react-icons/tb";
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
          {/* <span className="mr-1 text-sm text-light">View all </span>
            <FaChevronRight size={10} /> */}
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

// // title, product, country, email, status, date, size = "normal"
// columns, renderRow, data
