import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { orderTableColumnHeader, orderTableData } from "../../data/orderData.js";
import OrderRowTemplate from './OrderTableRowTemplate.jsx'
import { useState } from "react";

function OrderTable({ filteredData, setfilteredData, originalArr, mutate }) {
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
      columns={orderTableColumnHeader}
      renderRow={(order, i) => (
          <OrderRowTemplate
            key={order._id}
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

export default OrderTable;
