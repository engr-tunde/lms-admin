import { payoutDetailTableData, payoutDetailColumnHeader } from "../../../data/payoutData";
import PayoutDetailRowTemplate from "./PayoutDetailROwTemplate";
import Table from "../../globals/Table";
import TableSearch from "../../globals/TableSearch";


const PayoutDetailTable = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between items-end">
        <span className="font-semibold">Orders included in payout</span>
        <TableSearch/>
      </div>
      <Table
      columns={payoutDetailColumnHeader}
      renderRow={PayoutDetailRowTemplate}
      data={payoutDetailTableData}
      />
    </div>
  )
}

export default PayoutDetailTable;
