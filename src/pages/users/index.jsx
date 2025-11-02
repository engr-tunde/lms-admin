import { FaChevronDown } from "react-icons/fa";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { RiCalendarLine } from "react-icons/ri";
import UsersCardContainer from "../../components/users/UsersCardContainer.jsx"
import UsersTable from "../../components/users/UsersTable.jsx"
import { fetchAllUsers, fetchUser } from "../../api/index.js";
import { useEffect, useState } from "react";
import ErrorWidget from "../../components/globals/ErrorWidget.jsx";
import Loader from "../../components/globals/Loader.jsx";
import NoDataPage from "../../components/globals/NoDataPage.jsx"
import Pagination from "../../components/globals/Pagination.jsx";


function DashboardUsersPage() {
  const { users, usersLoading, usersError, mutate } = fetchAllUsers();

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState(); 
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    if (users?.users?.length) {
      setoriginalArr(users?.users);
      setfilteredData(users?.users);
    }
  }, [users?.users]);

  const itemsPerPage = users?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (usersLoading) return <Loader />;
  if (usersError) return <ErrorWidget error={usersError} />;
  if (!users) return "No User available";

  return (
    <div className="flex flex-col gap-6">
      <DashboardNavBar
        title="Users"
        subtitle="Track, confirm, and override customer orders when needed."
      />
      <div className="w-full flex flex-col gap-8 h-[90%] overflow-y-scroll">
        <div className="flex justify-end">
          <div className="px-[6px] py-1 border-merseBorder border-[1px] flex items-center gap-2">
            <RiCalendarLine />
            <div className="text-sm text-light">Last month</div>
            <FaChevronDown size={10} />
          </div>
        </div>
        {users?.summary && 
          <UsersCardContainer summary={users?.summary} />}
        {filteredData ? (
          <UsersTable
            filteredData={currentItems}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            mutate={mutate}
          />
        ) : <NoDataPage message="It seems no user is available yet" />
        }
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  );
}

export default DashboardUsersPage;
