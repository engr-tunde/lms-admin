import { CalendarIcon, PlusIcon, UserIcon } from "../../components/globals/Icons";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import ManageUsers from "../../components/users";
import DashboardStats from "../../components/globals/DashboardStats";
import { Ban, UserCheck } from "lucide-react";

const DashboardUsersPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  // const userStats = [
  //   { label: 'Total Students', value: '1,248', icon: UserIcon, color: 'purple' },
  //   { label: 'Active Students', value: '892', icon: UserCheck, color: 'emerald' },
  //   { label: 'New This Month', value: '124', icon: CalendarIcon, color: 'blue' },
  //   { label: 'Suspended', value: '8', icon: Ban, color: 'red' },
  // ];

  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Users"
          subtitle="Manage your students and other participators in your courses"
        />
      </div>
      <div className="min-h-screen bg-gray-50 p-6"> 
        <ManageUsers />
      </div>
      {showAddModal && (
        <AddUsersModal
          setShowAddModal={setShowAddModal}
        />
      )}
    </div>
  );
}

export default DashboardUsersPage;



