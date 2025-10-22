import DashboardNavBar from "../../components/globals/DashboardNavBar";
import PayoutDetailCard from "../../components/payouts/payout-details/PayoutDetailCard";
import PayoutDetailTable from "../../components/payouts/payout-details/PayoutDetailTable";
import { capitalize, formatter } from "../../utils/helpers"
import { useParams } from "react-router-dom";
import { fetchPayout } from "../../api"
import { useEffect, useState } from "react";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";


function PayoutDetailPage() {
  const { id } = useParams();
  const { payout, payoutLoading, payoutError, mutate } = fetchPayout(id);
  const [ filteredData, setfilteredData ] = useState();
  const [ originalArr, setoriginalArr ] = useState();

  console.log("id", id);
  console.log("Payout Detail Data:", payout);

  useEffect(() => {
    if (payout) {
      setoriginalArr(payout?.orders);
      setfilteredData(payout?.orders);
    }
  }, [payout]);



  return (
    <div className="flex flex-col gap-8">
      <DashboardNavBar
        path="< Back Payout > Payout details"
        title={capitalize(payout?.brand?.name)}
        subtitle="See how your brand is performing today across sales, orders & top products."
        status={payout?.status}
      />
      {payout ? (
        <>
          <PayoutDetailCard payout={payout} />
          <PayoutDetailTable
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
            commission={payout?.commission}
          />
        </>
      ) : payoutLoading ? (
        <Loader />
      ) : payoutError ? (
        <ErrorWidget error={payoutError} />
      ) : null}
    </div>
  );
}

export default PayoutDetailPage;
