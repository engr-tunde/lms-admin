import Table from "../../globals/Table"
import OrderDisputeViewItemsRowTemplate from "./OrderDisputeViewItemsRowTemplate"
import { orderDisputeViewTableColumnHeader } from "../../../data/disputeData"

const OrderDisputeViewItemsTable = ({ disputeItems }) => {
  return (
    <div>
      <div>Order Item(s)</div>
      <Table
        columns={orderDisputeViewTableColumnHeader}
        renderRow={(item) => (
          <OrderDisputeViewItemsRowTemplate
            key={item?._id}
            item={item}
          />
        )}
        data={disputeItems}
      />
    </div>
  )
}

export default OrderDisputeViewItemsTable