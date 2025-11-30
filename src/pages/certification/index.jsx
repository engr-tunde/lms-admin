import LMSAdminCertifications from "../../components/certification";

import { PlusIcon } from "../../components/globals/Icons";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import { useState } from "react";
import ManageUsers from "../../components/users";
import AddUsersModal from "../../components/users/AddUsersModal";
import { CheckCircle } from "lucide-react";

const DashboardCertificationsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <DashboardNavBar
          title="Certificate Management"
          subtitle="Generate, manage, and verify course completion certificates"
        />
        <div className="flex gap-3">
          <button
            onClick={() => setShowVerifyModal(true)}
            className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Verify Certificate
          </button>
          <button
            onClick={() => setShowGenerateModal(true)}
            className="px-5 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <PlusIcon className="w-4 h-4" />
            Generate Certificate
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm ">
        <LMSAdminCertifications />
      </div>
      {/* {showAddModal && (
        <AddUsersModal
          setShowAddModal={setShowAddModal}
        />
      )} */}
    </div>
  );
}

export default DashboardCertificationsPage;







