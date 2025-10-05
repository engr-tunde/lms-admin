import {
  brandsTableColumnHeader,
  // brandsTableData,
} from "../../data/brandsData";
import Table from "../globals/Table";
import TableSearch from "../globals/TableSearch";
import BrandTableRowTemplate from "./BrandTableRowTemplate";

function AllBrandsTable({brandsData}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All brands</div>
        <div className="flex items-center cursor-pointer">
          <TableSearch />
        </div>
      </div>
      <Table
        columns={brandsTableColumnHeader}
        renderRow={BrandTableRowTemplate}
        data={brandsData}
      />
    </div>
  );
}

export default AllBrandsTable;
