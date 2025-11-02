import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OrderDisputeViewStatusCard from "../../components/dispute/order-dispute-view/OrderDisputeViewStatusCard.jsx"
import OrderDisputeViewItemsTable from "../../components/dispute/order-dispute-view/OrderDisputeViewItemsTable.jsx";
import OrderDisputeViewSummaryCard from "../../components/dispute/order-dispute-view/OrderDisputeViewSummary.jsx";
import OrderDisputeViewDeliveryInfo from "../../components/dispute/order-dispute-view/OrderDisputeViewDeliveryInfo.jsx";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from 'react'
import { fetchDispute, fetchOrder } from "../../api/index.js";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../../components/globals/Loader.jsx";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import NoDataPage from "../../components/globals/NoDataPage.jsx";
import { toSentence } from "../../utils/helpers.js";

function OrderDisputeViewPage() {
  // const [updateStatusButtonOpen, setUpdateStatusButtonOpen] = useState(null);
  const [disputeData, setdisputeData] = useState();

  const { id } = useParams();
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search); 
  const orderId = queryParams.get("orderId");
  const { dispute, disputeLoading, disputeError, mutate } = fetchDispute(id, { orderId });

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
    <div 
     className="flex flex-col gap-9"
     onClick={(e) => {
      setUpdateStatusButtonOpen(false)
     }}
    >
      <DashboardNavBar
        title={`DSP-${disputeData?._id.slice(-5)}`}
        copyable
        status={toSentence(disputeData?.status)}
      />
      {/* <div className="flex w-full justify-end relative">
        <button 
          className="px-3 py-1 bg-black text-white flex items-center text-sm gap-1"
          onClick={(e) => {
            e.stopPropagation();
            setUpdateStatusButtonOpen(!updateStatusButtonOpen);
          }}
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
        <OrderDisputeViewStatusCard disputeData={disputeData} />
        <OrderDisputeViewItemsTable disputeItems={disputeData?.order?.items} />
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
          <OrderDisputeViewSummaryCard
           order={order}
          />
          <OrderDisputeViewDeliveryInfo 
            order={order}
          />
        </div>
        
      </div>
    </div>
  );
}

export default OrderDisputeViewPage;
