import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react'
import PayoutDisputeViewStatusCard from "../../components/dispute/payout-dispute-view/PayoutDisputeViewStatusCard.jsx";
import PayoutDisputeViewInfoCard from "../../components/dispute/payout-dispute-view/PayoutDisputeViewInfoCard.jsx";
import PayoutDisputeViewTable from "../../components/dispute/payout-dispute-view/PayoutDisputeViewTable.jsx";
import { useLocation, useParams } from "react-router-dom";

function PayoutDisputeViewPage() {
  const [disputeData, setdisputeData] = useState();

  const { id } = useParams();
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search); 
  const payoutId = queryParams.get("payoutId");
  const { dispute, disputeLoading, disputeError, mutate } = fetchDispute(id, { payoutId });
  
  useEffect(() => {
    if (dispute?.data) {
      setdisputeData(dispute?.data);
    }
  }, [dispute?.data]);
  
  const { order } = fetchOrder(disputeData?.order?._id);

  if (disputeLoading) return <Loader />;
  if (disputeError) return <ErrorWidget error={disputeError} />;
  if (!dispute) return <NoDataPage message="No dispute data found." />;

  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        title={`POUT-${disputeData?._id.slice(-5)}`}
        copyable
        status={disputeData?.status}
      />
      {/* <div className="flex w-full justify-end relative">
        <button 
          className="px-3 py-1 bg-black text-white flex items-center text-sm gap-1"
          onClick={handleActionClick}
        >
          Update Status
          <FaChevronDown size={12}/>
        </button>
        {updateStatusButtonOpen && (
            <div className="absolute z-10 w-[150px] text-sm rounded-md flex flex-col p-3 gap-3 top-10 right-0 bg-white shadow-2xl">
              <div className="flex items-center gap-1">
                <span className="text-amber-500">Review request</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-red-500">Reject request</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-500">Accept request</span>
              </div>
            </div>
          )}
      </div> */}
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <PayoutDisputeViewStatusCard
          disputeData={disputeData}
        />
        <PayoutDisputeViewInfoCard 
          message={dispute?.message}
          disputeData={disputeData}
        />
        <PayoutDisputeViewTable 
          orderItems={disputeData?.payout?.orders?.items}
        />
        
      </div>
    </div>
  );
}

export default PayoutDisputeViewPage;
