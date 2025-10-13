import Table from "../../globals/Table"
import OrderDisputeViewItemsRowTemplate from "./OrderDisputeViewItemsRowTemplate"
import { orderDisputeViewTableColumnHeader, orderDisputeViewTableData } from "../../../data/disputeData"

const OrderDisputeViewItemsTable = () => {
  return (
    <div>
      <div>Order Item(s)</div>
      <Table
        columns={orderDisputeViewTableColumnHeader}
        renderRow={OrderDisputeViewItemsRowTemplate}
        data={orderDisputeViewTableData}
      />
    </div>
  )
}

export default OrderDisputeViewItemsTable