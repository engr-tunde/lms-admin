import { PlusIcon } from "../../components/globals/Icons";
import DashboardNavBar from "../../components/globals/DashboardNavBar";
import ManageCertification from "../../components/certification";
import DashboardStats from "../../components/globals/DashboardStats";
import { Award, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import GenerateCertificateModal from "../../components/certification/GenerateCertificateModal";
import { useState } from "react";
import VerifyCertificateModal from "../../components/certification/VerifyCertificateModal";


const DashboardCertificationsPage = () => {
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState('');

  const certificationStat = [
    { label: 'Total Certificates', value: '5', icon: Award, color: 'purple' },
    { label: 'Issued', value: '3', icon: CheckCircle, color: 'emerald' },
    { label: 'Pending', value: '1', icon: AlertCircle, color: 'amber' },
    { label: 'Revoked', value: '1', icon: XCircle, color: 'red' },
  ];

  const courses = [
    'Introduction to AI',
    'Advanced React Development',
    'Digital Marketing Fundamentals',
    'Data Science Bootcamp',
    'Web Design Essentials'
  ];

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
      <div className="min-h-screen bg-gray-50 p-6"> 
        <DashboardStats 
          stats={certificationStat} 
        />
        <ManageCertification />
      </div>
      {showGenerateModal && (
        <GenerateCertificateModal 
          setShowGenerateModal={setShowGenerateModal}
          courses={courses}
        />
      )}
      {showVerifyModal && (
        <VerifyCertificateModal 
          setShowVerifyModal={setShowVerifyModal}
          courses={courses}
        />
      )}
    </div>
  );
}

export default DashboardCertificationsPage;







