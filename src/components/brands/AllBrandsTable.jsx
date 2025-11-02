import { useState } from "react";
import {
  brandsTableColumnHeader,
} from "../../data/brandsData";
import Table from "../globals/Table";
import TableSearch from "../globals/TableSearch";
import BrandTableRowTemplate from "./BrandTableRowTemplate";

function AllBrandsTable({ filteredData, setfilteredData, originalArr, mutate }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All brands</div>
        <div className="flex items-center cursor-pointer">
          <TableSearch
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            searchable={["name"]}
           />
        </div>
      </div>
      <Table
        columns={brandsTableColumnHeader}
        renderRow={(item, i) => (
          <BrandTableRowTemplate
            key={item?.id}
            brand={item}
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

export default AllBrandsTable;




