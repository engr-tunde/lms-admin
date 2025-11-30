import { Ban, UserCheck, UserIcon } from 'lucide-react';
import DashboardStats from '../globals/DashboardStats';
import Pagination from '../globals/Pagination';
import UsersTable from './UsersTable'
import { CalendarIcon } from '../globals/Icons';

function ManageUsers() {

  const userStats = [
    { label: 'Total Students', value: '1,248', icon: UserIcon, color: 'purple' },
    { label: 'Active Students', value: '892', icon: UserCheck, color: 'emerald' },
    { label: 'New This Month', value: '124', icon: CalendarIcon, color: 'blue' },
    { label: 'Suspended', value: '8', icon: Ban, color: 'red' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full mx-auto p-6">
      <DashboardStats stats={userStats} />
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <UsersTable />
        <Pagination
        />
      </div>
    </div>
  );
}

export default ManageUsers;