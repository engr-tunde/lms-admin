import DashboardNavBar from "../../components/globals/DashboardNavBar";
import BasicInfoCard from "../../components/users/user-view/BasicInfoCard.jsx"
import SummaryCard from "../../components/users/user-view/SummaryCard.jsx"
import RecentOrderCard from "../../components/users/user-view/RecentOrderCard.jsx"
import DeliveryDetailsCard from "../../components/users/user-view/DeliveryDetailsCard.jsx"
import DisputeHistoryCard from "../../components/users/user-view/DisputeHistoryCard.jsx"
import { useParams } from 'react-router-dom'
import Loader from "../../components/globals/Loader.jsx";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import { fetchUser } from "../../api/index.js";

function DashboardUsersViewPage() {
  const { id } = useParams();

//   const { user, userLoading, userError, mutate } = fetchUser(id)
//   console.log("fetched user", user)

//   if (userLoading) return <Loader />;
//   if (userError) return <ErrorWidget error={userError} />;
//   if (!user) return <div>No user data found.</div>;

  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        path="< Back Users > User details"
        // title={user?.savedAddress?.fullName} 
        title="Brenda Okoro"
        copyable
        subtitle="View and manage user account details."
      />
      <div className="w-full grid grid-cols-2 space-x-10 h-[90%] overflow-y-scroll">
        {/* {user ? ( */}
            <BasicInfoCard />
            <SummaryCard />
            <RecentOrderCard />
            <div className="flex flex-col gap-10">
              <DeliveryDetailsCard />
              <DisputeHistoryCard />
            </div>
        {/* ) : null} */}
      </div>
    </div>
  );
}

export default DashboardUsersViewPage;



// {orders.orders ? (
//         <>
          
//         </>
//       ) : ordersLoading ? (
//         <Loader />
//       ) : ordersError ? (
//         <ErrorWidget error={ordersError} />
//       ) : null}