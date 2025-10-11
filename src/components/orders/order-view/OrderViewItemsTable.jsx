import Table from "../../globals/Table"
import OrderViewItemsRowTemplate from "./OrderViewItemsRowTemplate"
import { orderViewTableColumnHeader, orderViewTableData } from "../../../data/orderData"


const OrderViewItemsTable = ({ order }) => {

  const data = order?.items || []
  return (
    <div>
      <div>Order Item(s)</div>
      <Table
        columns={orderViewTableColumnHeader}
        renderRow={(item, i) => (
          <OrderViewItemsRowTemplate
            key={item.productId}
            item={item}
            i={i}
            orderStatus={order?.status}
          />
        )}
        data={data}
      />
    </div>
  )
}

export default OrderViewItemsTable