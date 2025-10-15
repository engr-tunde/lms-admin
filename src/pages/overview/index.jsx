import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import OverviewCards from "../../components/overview/OverviewCardsContainer";
import OverviewTable from "../../components/overview/OverviewTable";
import { fetchAllBrands, fetchOrders } from "../../api";
import { useEffect, useState } from "react";
import BrandRequestContainer from "../../components/brands/brand-requests/BrandRequestContainer";

function DashboardOverviewPage() {
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const { brands } = fetchAllBrands();
  const { orders, ordersLoading, ordersError, mutate } = fetchOrders();
  console.log("brands ss", brands);
  console.log("orders ss", orders);

  useEffect(() => {
    if (orders) {
      setoriginalArr(orders?.orders);
      setfilteredData(orders?.orders);
    }
  }, [orders]); 

  const newlyAddedBrands = () => {
    let allBrands = brands?.brands

    if (!allBrands) return [];
    const pendingBrands = allBrands.filter(brand => brand.status === "pending");
    if (pendingBrands.length > 0) {
        allBrands = pendingBrands
    };
    const sorted = [...allBrands].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    return sorted.slice(0, 3);
  };

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
        <OverviewCards />
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
