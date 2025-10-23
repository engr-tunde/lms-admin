import NoDataPage from '../../globals/NoDataPage';
import NewOrderBrandsCard from './NewOrderBrandsCard';


function NewOrderBrandsCardContainer({ orders }) {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-start">
        <div className="font-semibold">New Orders</div>
      </div>
      {orders?.length ? (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        <NewOrderBrandsCard
        orderImage = "/assets/images/product-placeholder.png"
        orderNumber="#12345"
        orderStatus="Awaiting warehouse receipt"
        product="Off-White Grateful SS T-Shirt"
        quantity="3"
        />

        <NewOrderBrandsCard
        orderImage = "/assets/images/product-placeholder.png"
        orderNumber="#12345"
        orderStatus="Awaiting warehouse receipt"
        product="Off-White Grateful SS T-Shirt"
        quantity="1"
        />

        <NewOrderBrandsCard
        orderImage = "/assets/images/product-placeholder.png"
        orderNumber="#12345"
        orderStatus="Awaiting warehouse receipt"
        product="Off-White Grateful SS T-Shirt"
        quantity="2"
        />
      </div>) : 
      <NoDataPage message="No recent order activities found for this brand." />
      }
    </div>
  );
}

export default NewOrderBrandsCardContainer;


