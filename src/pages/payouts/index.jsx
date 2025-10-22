import PayoutCardContainer from "../../components/payouts/PayoutCardContainer";
import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import PayoutTable from "../../components/payouts/PayoutTable";
import { fetchAllPayouts } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import { useEffect, useState } from "react";
import NoDataPage from "../../components/globals/NoDataPage";
import Pagination from "../../components/globals/Pagination";

function DashboardPayoutPage() {
  const { payouts, payoutsLoading, payoutsError, mutate } = fetchAllPayouts();
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState(); 
  const [summaryData, setsummaryData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (payouts?.payouts?.length) {
      setoriginalArr(payouts?.payouts);
      setfilteredData(payouts?.payouts);
    }
  }, [payouts]);
  
  useEffect(() => {
    if (payouts) {
      setsummaryData(payouts?.summary);
    }
  }, [payouts]);
  console.log("Payouts Data:", payouts);

  const itemsPerPage = payouts?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (payoutsLoading) return <Loader />;
  if (payoutsError) return <ErrorWidget error={payoutsError} />;
  if (!payouts) return "No payouts found";

  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Payouts"
        subtitle="See how your brand is performing today across sales, orders & top products."
      />
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        {summaryData && (
          <PayoutCardContainer
            summary={summaryData} 
            total={payouts?.total}
          />
        )}
        {filteredData ? (
          <PayoutTable
            filteredData={currentItems}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
            nextDueDate={payouts?.summary?.nextDueDate}
          />
        ) : <NoDataPage message="No payouts is available yet" />}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  );
}

export default DashboardPayoutPage;
