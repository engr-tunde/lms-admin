import Table from "../../globals/Table"
import OrderViewItemsRowTemplate from "./OrderViewItemsRowTemplate"
import { orderViewTableColumnHeader, orderViewTableData } from "../../../data/orderData"


const OrderViewItemsTable = () => {
  return (
    <div>
      <div>Order Item(s)</div>
      <Table
        columns={orderViewTableColumnHeader}
        renderRow={OrderViewItemsRowTemplate}
        data={orderViewTableData}
      />
    </div>
  )
}

export default OrderViewItemsTable