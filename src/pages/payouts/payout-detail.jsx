import DashboardNavBar from "../../components/globals/DashboardNavBar";
import PayoutDetailCard from "../../components/payouts/payout-details/PayoutDetailCard";
import PayoutDetailTable from "../../components/payouts/payout-details/PayoutDetailTable";
import { capitalize, formatter } from "../../utils/helpers"
import { useParams } from "react-router-dom";
import { fetchPayout } from "../../api"
import { useEffect, useState } from "react";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import NoDataPage from "../../components/globals/NoDataPage";
import Pagination from "../../components/globals/Pagination";


function PayoutDetailPage() {
  const { id } = useParams();
  const { payout, payoutLoading, payoutError, mutate } = fetchPayout(id);
  const [ filteredData, setfilteredData ] = useState();
  const [ originalArr, setoriginalArr ] = useState();
  const [ currentPage, setCurrentPage ] = useState(1);

  console.log("id", id);
  console.log("Payout Detail Data:", payout);

  useEffect(() => {
    if (payout?.orders?.length) {
      setoriginalArr(payout?.orders);
      setfilteredData(payout?.orders);
    }
  }, [payout?.orders]);

  const itemsPerPage = payout?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (payoutLoading) return <Loader />;
  if (payoutError) return <ErrorWidget error={payoutError} />;
  if (!payout) return <div>No payout data found.</div>;

  return (
    <div className="flex flex-col gap-8">
      <DashboardNavBar
        path="< Back Payout > Payout details"
        title={capitalize(payout?.brand?.name)}
        subtitle="See how your brand is performing today across sales, orders & top products."
        status={payout?.status}
      />
      {
        payout && <PayoutDetailCard payout={payout} />
      }
      {filteredData ? (
          <PayoutDetailTable
            filteredData={currentItems}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
            commission={payout?.commission}
          />
      ) : <NoDataPage message={"No orders found for this payout."} />
      }
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default PayoutDetailPage;
