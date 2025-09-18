import { brandFinanceTableColumnHeader, brandFinanceTableData } from "../../../data/brandsData.js";
import BrandFinanceRowTemplate from "./BrandFinanceRowTemplate.jsx"
import Table from "../../globals/Table.jsx";
import TableSearch from "../../globals/TableSearch.jsx";


function BrandFinanceTable() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">Payout History</div>
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
      </div>
      <Table 
      columns={brandFinanceTableColumnHeader}
      renderRow={BrandFinanceRowTemplate}
      data={brandFinanceTableData}
      />
    </div>
  );
}

export default BrandFinanceTable;
