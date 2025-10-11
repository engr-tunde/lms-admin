import NewOrderCard from './NewOrderCard'


function NewOrderCardContainer({ newOrders }) {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-start">
        <div className="font-semibold">New Orders</div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        {newOrders?.length > 0 && 
          newOrders.map((order, index) => (
            <NewOrderCard order={order} key={index} />
          ))}
        {/* <NewOrderCard order={newOrders} key={newOrders?._id} /> */}
      </div>
      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        <NewOrderCard
        orderImage = "/assets/images/product-placeholder.png"
        orderNumber="#12345"
        orderStatus="Awaiting warehouse receipt"
        product="Off-White Grateful SS T-Shirt"
        quantity="3"
        />

        <NewOrderCard
        orderImage = "/assets/images/product-placeholder.png"
        orderNumber="#12345"
        orderStatus="Awaiting warehouse receipt"
        product="Off-White Grateful SS T-Shirt"
        quantity="1"
        />

        <NewOrderCard
        orderImage = "/assets/images/product-placeholder.png"
        orderNumber="#12345"
        orderStatus="Awaiting warehouse receipt"
        product="Off-White Grateful SS T-Shirt"
        quantity="2"
        />
      </div> */}
    </div>
  );
}

export default NewOrderCardContainer;


