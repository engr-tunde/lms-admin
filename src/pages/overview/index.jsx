import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import OverviewCards from "../../components/overview/OverviewCardsContainer";
import OverviewTable from "../../components/overview/OverviewTable";
import { fetchAllBrands, fetchAllOrders, fetchAllPayouts, fetchAllUsers } from "../../api";
import { useEffect, useState } from "react";
import BrandRequestContainer from "../../components/brands/brand-requests/BrandRequestContainer";

function DashboardOverviewPage() {
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const { brands } = fetchAllBrands();
  const { orders, mutate } = fetchAllOrders();
  const { users } = fetchAllUsers();
  const { payouts } = fetchAllPayouts()

  const [totalSales, settotalSales] = useState(0);
  const [totalBrands, settotalBrands] = useState(0);
  const [totalUsers, settotalUsers] = useState(0);
  const [totalOrders, settotalOrders] = useState(0);

  useEffect(() => {
    if (brands) {
      settotalBrands(brands.total || brands?.brands?.length);
    }
    if (orders) {
      settotalOrders(orders.total || orders?.orders?.length);
    }
    if (users) {
      settotalUsers(users.totalCount || users.users?.length);
    }
    if (payouts?.summary?.totalSales) {
      settotalSales(payouts?.summary?.totalSales);
    }
  }, [brands, orders, users]);
  
 



  useEffect(() => {
    if (orders) {
      setoriginalArr(orders?.orders);
      setfilteredData(orders?.orders);
    }
  }, [orders]); 

  return (
    <div className="flex flex-col gap-6 h-full">
      <DashboardNavBar
        title="Overview"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        <OverviewCards 
          totalSales={totalSales}
          totalBrands={totalBrands}
          totalUsers={totalUsers}
          totalOrders={totalOrders}
        />
        {
          brands?.summary?.brandRequests ? 
          (<BrandRequestContainer requests={brands?.summary?.brandRequests} />): 
          null
        }
        <OverviewTable 
          filteredData={filteredData}
          setfilteredData={setfilteredData}
          originalArr={originalArr}
          mutate={mutate}
        />
      </div>
    </div>
  );
}

export default DashboardOverviewPage;
