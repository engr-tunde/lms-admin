import NoDataPage from '../../globals/NoDataPage';
import NewOrderBrandsCard from './NewOrderBrandsCard';


function NewOrderBrandsCardContainer({ orders }) {

  console.log("orders", orders)

  const newlyAddedOrders = () => {
    let allOrders = orders;
    if (!allOrders) return [];
    const sorted = [...allOrders].sort(
      (a, b) => new Date(b.created_at || b.createdAt) - new Date(a.created_at || a.createdAt)
    );
    return sorted.slice(0, 3);
  };
  console.log("newly added orders", newlyAddedOrders());
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-start">
        <div className="font-semibold">New Orders</div>
      </div>
      {orders?.length ? (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        {newlyAddedOrders().map((order, i) => (
          <NewOrderBrandsCard
            key={i}
            newOrder={order}
        />
        ))}
      </div>) : 
      <NoDataPage message="No recent order activities found for this brand." />
      }
    </div>
  );
}

export default NewOrderBrandsCardContainer;


