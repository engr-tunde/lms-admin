import DashboardNavBar from "../../components/globals/DashboardNavBar";
import ReceivePaymentPage from "../../components/payments";


const DashboardPaymentsPage = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Receive Payment"
        subtitle="Manage your payment details to receive course earnings"
      />
      <div className="relative w-full flex flex-col gap-8 bg-gray-50 mx-auto p-10">
        <ReceivePaymentPage />
      </div>
    </div>
  )
}

export default DashboardPaymentsPage;






