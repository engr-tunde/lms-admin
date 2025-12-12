import Pagination from '../globals/Pagination';
import UsersTable from './UsersTable'
import { NoUserAvailable } from "../globals/NoValuesPage"
import { fetchAllUsers } from "../../api/index"
import Loader from '../globals/Loader';
import ErrorWidget from '../globals/ErrorWidget';
import { useEffect, useState } from 'react';

function ManageUsers() {
  const [filteredData, setFilteredData] = useState();
  const [originalArr, setOriginalArr] = useState();

  const { users, usersLoading, usersError, mutate } = fetchAllUsers()
  console.log("Users", users)

  useEffect(() => {
    if (users?.data?.length) {
      setFilteredData(users?.data);
      setOriginalArr(users?.data);
    }
  }, [users]);

  if (usersLoading) return <Loader/>
  if (usersError) return <ErrorWidget/>
  return (
    <div className="mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {filteredData ? (
          <UsersTable 
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            originalArr={originalArr}
            setOriginalArr={setOriginalArr}
            mutate={mutate}
          />
        ) : (
          <NoUserAvailable />
        )}
      </div>
    </div>
  );
}

export default ManageUsers;