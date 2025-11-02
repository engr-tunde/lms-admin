import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table.jsx"
import { brandsOrderTableColumnHeader, brandsOrderTableData } from "../../../data/brandsData.js";
import BrandsOrderRowTemplate from './BrandsOrderTableRowTemplate.jsx'
import { useState } from "react";

function BrandsOrderTable({ filteredData, setfilteredData, originalArr, mutate }) {
  const [openIndex, setOpenIndex] = useState(null);
  const searchable = [
    "status", 
    "shippingAddress.fullName", 
    "shippingAddress.email", 
    "items.brandName", 
    "items.productName",
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All orders</div>
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
      columns={brandsOrderTableColumnHeader}
      renderRow={(order, i) => (
          <BrandsOrderRowTemplate
            key={order?._id}
            order={order}
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

export default BrandsOrderTable;
