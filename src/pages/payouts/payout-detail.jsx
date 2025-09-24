import DashboardNavBar from "../../components/globals/DashboardNavBar";
import PayoutDetailCard from "../../components/payouts/payout-details/PayoutDetailCard";
import PayoutDetailTable from "../../components/payouts/payout-details/PayoutDetailTable";
import { formatter } from "../../utils/helpers"


function PayoutDetailPage() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardNavBar
        path="< Back Payout > Payout details"
        title="StylistCo"
        subtitle="See how your brand is performing today across sales, orders & top products."
        status="Pending"
      />
      <PayoutDetailCard 
        totalSales={formatter(120000)} 
        netAmount={formatter(10000)} 
        completedOrder={200} 
        paymentMethod="Flutterwave" 
        paidTo="******5678" 
        paymentStatus="Pending"
      />
      <PayoutDetailTable/>
    </div>
  );
}

export default PayoutDetailPage;
