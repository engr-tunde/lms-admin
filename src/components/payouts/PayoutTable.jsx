import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { payoutColumnHeader, payoutData } from "../../data/payoutData.js";
import PayoutRowTemplate from "./PayoutTableRowTemplate.jsx";


function PayoutTable() {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All payout</div>
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
      </div>
      <Table 
      columns={payoutColumnHeader}
      renderRow={PayoutRowTemplate}
      data={payoutData}
      />
    </div>
  );
}

export default PayoutTable;
