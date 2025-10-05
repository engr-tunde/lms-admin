import DashboardNavBar from "../../components/globals/DashboardNavBar";
import MemberTable from "../../components/members/MemberTable.jsx";
import { useEffect, useState } from "react";
import AddMemberModal from "../../components/members/AddMemberModal.jsx";
import { fetchAdmins } from "../../api/index.js";
import Loader from "../../components/globals/Loader.jsx";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";

function DashboardMembersPage() {
  const { admins, adminsLoading, adminsError } = fetchAdmins();
  const [showModal, setShowModal] = useState(false);
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  console.log("admins ss", admins?.data);

  useEffect(() => {
    if (admins) {
      setoriginalArr(admins?.data);
      setfilteredData(admins?.data);
    }
  }, [admins]);

  

  // useEffect(() => {
  //   let newArr;
  //   if (admins?.data) {
  //     setnewData(admins?.data);
  //   }
  //   // if (admins?.data) {
  //   // if (search) {
  //   //   newArr = admins?.data?.filter(
  //   //     (item) =>
  //   //       item?.fullName?.toLowerCase().includes(search?.toLowerCase()) ||
  //   //       item?.email?.toLowerCase().includes(search?.toLowerCase()) ||
  //   //       item?.role?.toLowerCase().includes(search?.toLowerCase())
  //   //   );
  //   //   setnewData(newArr);
  //   // } else {
  //   //   setnewData(admins?.data);
  //   // }
  //   // }
  // }, [admins, search]);

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
            data={filteredData}
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
          />
        ) : adminsLoading ? (
          <Loader />
        ) : adminsError ? (
          <ErrorWidget error={adminsError} />
        ) : null}
      </div>
      <AddMemberModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default DashboardMembersPage;
