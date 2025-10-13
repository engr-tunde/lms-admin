import DashboardNavBar from "../../components/globals/DashboardNavBar";
import OrderDisputeTable from "../../components/dispute/OrderDisputeTable";
import PayoutDisputeTable from "../../components/dispute/PayoutDisputeTable"
import { useState } from "react";
import { fetchAllDisputes } from "../../api";


function DashboardDisputePage() {
  const [activeTab, setActiveTab] = useState("Order Dispute")
  const tabs = ["Order Dispute", "Payout Dispute"]
  
  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Dispute"
        subtitle="Manage and resolve customer or merchant issues."
      />
      <div className="w-full flex flex-col gap-8">
        {activeTab === "Order Dispute" ? (
            <OrderDisputeTable activeTab={activeTab} setActiveTab={setActiveTab} />
        ) : (
            <PayoutDisputeTable activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </div>
    </div>
  );
}

export default DashboardDisputePage;
