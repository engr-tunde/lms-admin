import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OrderDisputeViewStatusCard from "../../components/dispute/order-dispute-view/OrderDisputeViewStatusCard.jsx"
import OrderDisputeViewItemsTable from "../../components/dispute/order-dispute-view/OrderDisputeViewItemsTable.jsx";
import OrderDisputeViewSummaryCard from "../../components/dispute/order-dispute-view/OrderDisputeViewSummary.jsx";
import OrderDisputeViewDeliveryInfo from "../../components/dispute/order-dispute-view/OrderDisputeViewDeliveryInfo.jsx";
import { FaChevronDown, FaCopy } from "react-icons/fa";
import { useState } from 'react'
import { fetchDisputeView } from "../../api/index.js";
import { useParams } from "react-router-dom";

function OrderDisputeViewPage() {
  const [updateStatusButtonOpen, setUpdateStatusButtonOpen] = useState(null);
  const handleActionClick = (i) => {
    setUpdateStatusButtonOpen(!updateStatusButtonOpen);
  };

   const { id } = useParams();
  const { disputeView, disputeViewLoading, disputeViewError, mutate } = fetchDisputeView(id);
  console.log("disputeView", disputeView);
    // const [dispute, setDispute] = useState(null);
  
  
  
    // useEffect(() => {
    //   const currentDispute = orders?.orders?.find((item) => item._id === id)
    //   setOrder(foundOrder)
    // }, [orders, id])
  
    // console.log("picked order", order);

  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        path="< Back Dispute > Order details"
        title="DSP 2023 003"
        copyable
        status="Completed"
      />
      <div className="flex w-full justify-end relative">
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
      </div>
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <OrderDisputeViewStatusCard
         issueType="Shipping delay"
         customerName="Brenda Alli"
         customerEmail="Brenda.alli@gmail.com"
         brandName="Stylish Co"
         brandEmail="Stylishco@gmail.com"
         urgencyLevel="High"
         preferredAction="Cancel order"
         />
        <OrderDisputeViewItemsTable />
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
          <OrderDisputeViewSummaryCard 
           orderId="ORD-9876" 
           orderDate="2024-06-10" 
           totalAmount="90,000.00" 
          />
          <OrderDisputeViewDeliveryInfo />
        </div>
        
      </div>
    </div>
  );
}

export default OrderDisputeViewPage;
