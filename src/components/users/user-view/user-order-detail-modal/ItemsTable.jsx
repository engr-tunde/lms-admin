import NoDataPage from "../../../globals/NoDataPage";
import Table from "../../../globals/Table";
import ItemsRowTemplate from "./ItemsRowTemplate";


const ItemsTable = ({ order }) => {

  if (!order?.items?.length) return <NoDataPage message="No items found in this order." />;

  const data = order?.items || []
  return (
    <div className="">
      <div>Order Item(s)</div>
      <Table
        columns={columnHeader}
        renderRow={(item, i) => (
          <ItemsRowTemplate
            key={item?.productId}
            item={item}
            i={i}
          />
        )}
        data={data}
      />
    </div>
  )
}

export default ItemsTable


export const columnHeader = [
  {
    header: "Product", 
    className: "hidden lg:table-cell"
  },
  {
    header: "Price per item", 
    className: "hidden lg:table-cell"
  },
]