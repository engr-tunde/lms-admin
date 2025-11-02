import DashboardNavBar from "../../components/globals/DashboardNavBar";
import MemberTable from "../../components/members/MemberTable.jsx";
import { useEffect, useState } from "react";
import AddMemberModal from "../../components/members/AddMemberModal.jsx";
import { fetchAdmins } from "../../api/index.js";
import Loader from "../../components/globals/Loader.jsx";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import NoDataPage from "../../components/globals/NoDataPage.jsx";
import Pagination from "../../components/globals/Pagination.jsx";

function DashboardMembersPage() {
  const { admins, adminsLoading, adminsError, mutate } = fetchAdmins();
  const [showModal, setShowModal] = useState(false);
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    if (admins?.data?.length) {
      setoriginalArr(admins?.data);
      setfilteredData(admins?.data);
    }
  }, [admins]);

  const itemsPerPage = admins?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (adminsLoading) return <Loader />;
  if (adminsError) return <ErrorWidget error={adminsError} />;
  if (!admins) return <div>No admins members found</div>;

  return (
    <div className="flex flex-col gap-0">
      <DashboardNavBar
        title="Members"
        subtitle="Manage and search members with ease."
      />
      <div className="flex justify-end">
        <button
          className="text-white bg-black px-3 py-2 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Add members
        </button>
      </div>
      <div className="my-5">
        <h2 className="text-xl">Roles and their responsibilities</h2>
        <p>
          <span className="font-semibold">Operations Manager</span> manages
          order fulfilment, warehouse receipts, and customer service issues.
        </p>
        <p>
          <span className="font-semibold">Finance Manager</span> manages brand
          payouts, refunds, reconciliations, and financial reporting.
        </p>
        <p>
          <span className="font-semibold">Brand Manager</span> onboards and
          verifies brands while monitoring compliance and managing product
          listings
        </p>
      </div>
      <div className="h-full min-h-[400px] w-full flex flex-col gap-8">
        {filteredData ? (
          <MemberTable
            filteredData={currentItems}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
          />
        ) : <NoDataPage message="No admin members available yet" />}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
      <AddMemberModal show={showModal} onClose={() => setShowModal(false)} mutate={mutate} />
    </div>
  );
}

export default DashboardMembersPage;
