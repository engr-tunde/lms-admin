import PayoutCardContainer from "../../components/payouts/PayoutCardContainer";
import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import PayoutTable from "../../components/payouts/PayoutTable";
import { fetchAllPayouts } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import { useEffect, useState } from "react";

function DashboardPayoutPage() {
  const { payouts, payoutsLoading, payoutsError, mutate } = fetchAllPayouts();
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState(); 

  useEffect(() => {
    if (payouts) {
      setoriginalArr(payouts?.payouts);
      setfilteredData(payouts?.payouts);
    }
  }, [payouts]);


  console.log("Payouts Data:", payouts);

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
        {filteredData ? (
          <>
            <PayoutCardContainer 
              summary={payouts?.summary} 
              total={payouts?.total}
            />
            <PayoutTable
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              mutate={mutate}
              nextDueDate={payouts?.summary?.nextDueDate}
          />
          </>
        ) : payoutsLoading ? (
          <Loader />
        ) : payoutsError ? (
          <ErrorWidget error={payoutsError} />
        ) : null}
      </div>
    </div>
  );
}

export default DashboardPayoutPage;
