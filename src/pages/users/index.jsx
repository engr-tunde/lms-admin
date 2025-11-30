import { PlusIcon } from "../../components/globals/Icons";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import ManageUsers from "../../components/users";
import AddUsersModal from "../../components/users/AddUsersModal";

const DashboardUsersPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Users"
          subtitle="Manage your students and other participators in your courses"
        />
        <button 
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4 text-white" />
          <span>
            Add Students
          </span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm ">
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



