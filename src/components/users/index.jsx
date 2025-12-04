import { Ban, UserCheck, UserIcon } from 'lucide-react';
import DashboardStats from '../globals/DashboardStats';
import Pagination from '../globals/Pagination';
import UsersTable from './UsersTable'
import { useState } from 'react';
import { usersData, usersColumnHeader } from "../../data/userData"
import { NoUserAvailable } from "../globals/NoValuesPage"
import { fetchAllUsers } from "../../api/index"

function ManageUsers() {

  const { users } = fetchAllUsers()
  console.log("Users", users)
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = usersData.filter(user => {
    if (filterStatus !== 'all' && user.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {filteredUsers.length ? (
          <>
            <UsersTable 
              filteredUsers={filteredUsers}
              usersColumnHeader={usersColumnHeader}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
            <Pagination/>
          </>
        ) : (
          <NoUserAvailable />
        )}
      </div>
    </div>
  );
}

export default ManageUsers;