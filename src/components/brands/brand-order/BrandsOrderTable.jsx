import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table.jsx"
import { brandsOrderTableColumnHeader, brandsOrderTableData } from "../../../data/brandsData.js";
import BrandsOrderRowTemplate from './BrandsOrderTableRowTemplate.jsx'

function BrandsOrderTable() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All orders</div>
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
      </div>
      <Table 
      columns={brandsOrderTableColumnHeader}
      renderRow={BrandsOrderRowTemplate}
      data={brandsOrderTableData}
      />
    </div>
  );
}

export default BrandsOrderTable;
