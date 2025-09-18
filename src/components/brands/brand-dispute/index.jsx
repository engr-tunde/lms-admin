import { useState } from 'react'
import BrandDisputeCardContainer from "./BrandDisputeCardContainer";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandDisputeOrderTable from "./BrandDisputeOrderTable"
import BrandDisputePayoutTable from "./BrandDisputePayoutTable";

function BrandDisputePage() {
  const [activeTab, setActiveTab] = useState("Order Dispute")
  const tabs = ["Order Dispute", "Payout Dispute"]

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last 30 days</div>
            <FaChevronDown size={10} />
          </div>
        </div>
      </div> 
      <BrandDisputeCardContainer />
      <div className="w-full flex flex-col gap-8">
        {activeTab === "Order Dispute" ? (
            <BrandDisputeOrderTable activeTab={activeTab} setActiveTab={setActiveTab}/>
        ) : (
            <BrandDisputePayoutTable activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </div>
    </>
  );
}

export default BrandDisputePage;