import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react'
import PayoutDisputeViewStatusCard from "../../components/dispute/payout-dispute-view/PayoutDisputeViewStatusCard.jsx";
import PayoutDisputeViewInfoCard from "../../components/dispute/payout-dispute-view/PayoutDisputeViewInfoCard.jsx";
import PayoutDisputeViewTable from "../../components/dispute/payout-dispute-view/PayoutDisputeViewTable.jsx";

function PayoutDisputeViewPage() {
  const [updateStatusButtonOpen, setUpdateStatusButtonOpen] = useState(null);
  const handleActionClick = (i) => {
    setUpdateStatusButtonOpen(!updateStatusButtonOpen);
  };

  return (
    <div className="flex flex-col gap-9">
      <DashboardNavBar
        path="< Back Dispute > Order details"
        title="POUT-1242-112"
        copyable
        status="In review"
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
        <PayoutDisputeViewStatusCard
         issueType="Missing item"
         brandName="Stylish Co"
         brandEmail="Stylishco@gmail.com"
         payoutMethod="Flutterwave"
         paidTo="*********6789"
         salesMonth="May, 2023"
         payoutDate="2023-06-01"
         disputedOn="2023-06-01"
         />
        <PayoutDisputeViewInfoCard />
        <PayoutDisputeViewTable />
        
      </div>
    </div>
  );
}

export default PayoutDisputeViewPage;
