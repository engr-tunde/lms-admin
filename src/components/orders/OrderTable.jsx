import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { orderTableColumnHeader, orderTableData } from "../../data/orderData.js";
import OrderRowTemplate from './OrderTableRowTemplate.jsx'

function OrderTable() {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All orders</div>
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
      </div>
      <Table 
      columns={orderTableColumnHeader}
      renderRow={OrderRowTemplate}
      data={orderTableData}
      />
    </div>
  );
}

export default OrderTable;
