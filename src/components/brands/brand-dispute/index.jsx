import { useState } from 'react'
import BrandDisputeCardContainer from "./BrandDisputeCardContainer";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import BrandDisputeOrderTable from "./BrandDisputeOrderTable"
import BrandDisputePayoutTable from "./BrandDisputePayoutTable";
import Loader from '../../globals/Loader';
import { fetchBrandDispute } from '../../../api';

function BrandDisputePage({ brandId }) {
  const [activeTab, setActiveTab] = useState("Order Dispute")
  const tabs = ["Order Dispute", "Payout Dispute"]
  const {brandDispute} = fetchBrandDispute(brandId, "order");

  console.log("Brand Dispute ss", brandDispute);

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
      { brandDispute?.summary ?
        <BrandDisputeCardContainer summary={brandDispute?.summary} /> : null
      }
      <div className="w-full flex flex-col gap-8">
        {activeTab === "Order Dispute" ? (
            <BrandDisputeOrderTable activeTab={activeTab} setActiveTab={setActiveTab} brandId={brandId} />
        ) : (
            <BrandDisputePayoutTable activeTab={activeTab} setActiveTab={setActiveTab} brandId={brandId} />
        )}
      </div>
    </>
  );
}

export default BrandDisputePage;