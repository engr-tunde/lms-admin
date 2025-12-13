import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { CheckIcon, ClockIcon, DollarIcon, PlusIcon, TrendingUpIcon } from "../../components/globals/Icons";
import ManageFinances from "../../components/finances";
import DashboardStats from "../../components/globals/DashboardStats";
import { fetchAllOrders, fetchAllPayments } from "../../api";
import { useEffect, useState } from "react";


const DashboardFinancesPage = () => {
  const [totalOrders, setTotalOrders] = useState();
  const [totalEarnings, setTotalEarnings] = useState();
  const [totalPayments, setTotalPayments] = useState();
  const { orders } = fetchAllOrders()
  const { payments } = fetchAllPayments()

  useEffect(() => {
    if (orders?.data?.orders) {
      setTotalOrders(orders?.data?.orders?.count.length);
      setTotalEarnings(orders?.data?.orders?.total);
    }
  }, [orders]);


  useEffect(() => {
    if (payments?.data) {
      setTotalPayments(payments?.data?.length);
    }
  }, [payments]);

  const financeStats = [
    { label: "Total Orders", value: totalOrders && totalOrders, icon: ClockIcon, color: "emerald" },
    { label: "Total Earnings", value: totalEarnings && `$${totalEarnings}`, icon: DollarIcon, color: "amber" },
    { label: "This Month", value: "$4500", icon: TrendingUpIcon, color: "blue" },
    { label: "Total Payments", value: totalPayments && totalPayments, icon: CheckIcon, color: "purple" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <DashboardNavBar
        title="Manage Finances"
        subtitle="Manage your orders, payments and earnings"
      />
      <div className="bg-gray-50">
        <div className="mx-auto p-6">
          <DashboardStats 
            stats={financeStats}
          />
          <ManageFinances />
        </div>
      </div>
    </div>
  )
}

export default DashboardFinancesPage;





