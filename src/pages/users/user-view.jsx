import DashboardNavBar from "../../components/globals/DashboardNavBar";
import BasicInfoCard from "../../components/users/user-view/BasicInfoCard.jsx"
import SummaryCard from "../../components/users/user-view/SummaryCard.jsx"
import RecentOrderCard from "../../components/users/user-view/RecentOrderCard.jsx"
import DeliveryDetailsCard from "../../components/users/user-view/DeliveryDetailsCard.jsx"
import DisputeHistoryCard from "../../components/users/user-view/DisputeHistoryCard.jsx"
import { useParams } from 'react-router-dom'
import Loader from "../../components/globals/Loader.jsx";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import { fetchUser, manageUser } from "../../api/index.js";
import NoDataPage from "../../components/globals/NoDataPage.jsx";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import AdditionalDetails from "../../components/users/user-view/AdditionalDetailsModal.jsx";
import { errorNotification, successNotification, capitalize } from "../../utils/helpers.js";

function DashboardUsersViewPage() {
  const { id } = useParams();
  const { user, userLoading, userError, mutate } = fetchUser(id)
  const [userStatus, setuserStatus] = useState();
  const [openActions, setopenActions] = useState(false);
  const [viewAddDetailsModal, setviewAddDetailsModal] = useState(false);

  const manageUserAction = async (action) => {
    const response = await manageUser({ action }, id);
    if (response?.status?.toString()?.includes("20")) {
      successNotification("Action completed successfully");
      mutate()
    } else {
      errorNotification(response?.data?.message[0]);
    }
  };

  useEffect(() => {
    if (user?.user) {
      setuserStatus(user?.user?.status);
    }
  }, [user?.user]);

  if (userLoading) return <Loader />;
  if (userError) return <ErrorWidget error={userError} />;
  if (!user) return <NoDataPage message="No user data available." />;

  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        path="< Back Users > User details"
        title={capitalize(user?.user?.fullName)} 
        copyable
        subtitle="View and manage user account details."
      />
      {
        userStatus && (
          <div className="-mb-3 relative">
            <button 
              className="px-3 py-1 bg-black text-white flex gap-1 items-center ml-auto"
              onClick={() => setopenActions(!openActions)}
            >
              Actions 
              <FaChevronDown size={10} />
            </button>
            {
              openActions && (
                <div 
                  className="absolute z-10 w-[160px] text-xs rounded-md flex flex-col right-0 top-9 bg-white shadow-xl border-[1px]"
                >
                  <>
                  {
                    userStatus === "active" && (
                      <button
                        className="text-xs text-left px-5 py-2"
                        onClick={() => {
                          manageUserAction("SUSPEND_USER"); 
                          setopenActions(false);
                          }}
                      >
                        Suspend Account
                      </button>
                    )
                  }
                  {
                    userStatus === "suspended" && (
                      <button
                        className="text-xs text-left px-5 py-2"
                        onClick={() => {
                          manageUserAction("ACTIVATE_USER"); 
                          setopenActions(false);
                          }}
                      >
                        Activate Account
                      </button>
                    )
                  }
                  </>
                </div>
              )
            }
          </div>
        )
      }
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 h-[90%] overflow-y-scroll">
        <BasicInfoCard 
          info={user?.savedAddress}
          userDetail={user?.user}
        />
        <SummaryCard 
          summary={user?.stats}
        />
        <RecentOrderCard 
          recentOrders={user?.recentOrders} 
          userLoading={userLoading}
          userError={userError}
        />
        <div className="flex flex-col gap-10">
          <DeliveryDetailsCard 
            address={user?.savedAddress?.addressLabel}
          />
          <DisputeHistoryCard 
            userDisputes={user?.disputes}
          />
        </div>
      </div>
      <AdditionalDetails 
        show={viewAddDetailsModal} 
        onClose={() => setviewAddDetailsModal(false)} 
        id={id} 
      />
    </div>
  );
}

export default DashboardUsersViewPage;