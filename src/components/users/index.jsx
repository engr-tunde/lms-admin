import { Ban, UserCheck, UserIcon } from 'lucide-react';
import DashboardStats from '../globals/DashboardStats';
import Pagination from '../globals/Pagination';
import UsersTable from './UsersTable'
import { CalendarIcon } from '../globals/Icons';

function ManageUsers() {

  return (
    <div className="mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <UsersTable />
        <Pagination
        />
      </div>
    </div>
  );
}

export default ManageUsers;