import { PlusIcon } from "../../components/globals/Icons";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import ManageAdmins from "../../components/admins";
import AddAdminModal from "../../components/admins/AddAdminModal";

const DashboardAdminsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Administration"
          subtitle="Manage your administrators and collaborators here"
        />
        <button 
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4 text-white" />
          <span>
            Add Admin
          </span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm ">
        <ManageAdmins />
      </div>
      {showAddModal && (
        <AddAdminModal
          setShowAddModal={setShowAddModal}
        />
      )}
    </div>
  );
}

export default DashboardAdminsPage;



