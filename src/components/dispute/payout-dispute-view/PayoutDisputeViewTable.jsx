import PayoutDisputeViewRowTemplate from "./PayoutDisputeViewRowTemplate"
import Table from "../../globals/Table"

const PayoutDisputeViewTable = ({ orderItems}) => {
  return (
    <div className="w-1/2">
      <div>Order Item(s)</div>
      <Table
        columns={payoutDisputeViewColumnHeader}
        renderRow={(item, i) => (
          <PayoutDisputeViewRowTemplate 
            key={i} 
            item={item} 
          />
        )}
        data={orderItems}
      />
    </div>
  )
}

export default PayoutDisputeViewTable







const payoutDisputeViewColumnHeader = [
    {
        header: "Order ID", 
        className: ""
    },
    {
        header: "Product", 
        className: ""
    },
    {
        header: "Price per item", 
        className: ""
    },
]

// const payoutDisputeViewTableData = [
//     {
//         orderId: "#ORD-9876", 
//         product: "Linen Shirt (White)",
//         pricePerItem: "120000"
//     }, 
//     {
//         orderId: "#ORD-9876", 
//         product: "Linen Shirt (White)",
//         pricePerItem: "120000"
//     }, 
// ]