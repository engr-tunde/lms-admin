import React, { useState } from 'react';
import { Award, Search, Filter, Download, Eye, CheckCircle, XCircle, AlertCircle, Calendar, User, FileText, Send, Plus, Edit2, Trash2, ChevronDown, Copy, ExternalLink } from 'lucide-react';
import DashboardStats from '../globals/DashboardStats';
import CertificationTable from './CertificationTable';
import { NoCertificateIssued } from "../globals/NoValuesPage"
import { certificationColumnHeader, certificationData } from '../../data/certificationData';

function LMSAdminCertifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const certificates = [
    {
      id: 'CERT-001',
      studentName: 'John Doe',
      courseName: 'Introduction to AI',
      issueDate: '2024-11-15',
      status: 'issued',
      verificationCode: 'AI2024-XY7Z-4K9P',
      email: 'john.doe@example.com'
    },
    {
      id: 'CERT-002',
      studentName: 'Sarah Johnson',
      courseName: 'Advanced React Development',
      issueDate: '2024-11-20',
      status: 'issued',
      verificationCode: 'RCT2024-AB3C-5D8E',
      email: 'sarah.j@example.com'
    },
    {
      id: 'CERT-003',
      studentName: 'Michael Chen',
      courseName: 'Digital Marketing Fundamentals',
      issueDate: '2024-11-22',
      status: 'pending',
      verificationCode: null,
      email: 'mchen@example.com'
    },
    {
      id: 'CERT-004',
      studentName: 'Emma Wilson',
      courseName: 'Data Science Bootcamp',
      issueDate: '2024-11-25',
      status: 'issued',
      verificationCode: 'DS2024-QW9R-2T5Y',
      email: 'emma.w@example.com'
    },
    {
      id: 'CERT-005',
      studentName: 'David Martinez',
      courseName: 'Web Design Essentials',
      issueDate: '2024-11-27',
      status: 'revoked',
      verificationCode: 'WD2024-UI7K-3N6M',
      email: 'dmartinez@example.com'
    }
  ];

  const courses = [
    'Introduction to AI',
    'Advanced React Development',
    'Digital Marketing Fundamentals',
    'Data Science Bootcamp',
    'Web Design Essentials'
  ];

  const tabs = [
    { id: 'all', label: 'All Certificates', count: certificationData.length },
    { id: 'issued', label: 'Issued', count: certificationData.filter(c => c.status === 'issued').length },
    { id: 'pending', label: 'Pending', count: certificationData.filter(c => c.status === 'pending').length },
    { id: 'revoked', label: 'Revoked', count: certificationData.filter(c => c.status === 'revoked').length }
  ];

  const filteredCertificates = certificationData.filter(cert => {
    const matchesTab = activeTab === 'all' || cert.status === activeTab;
    const matchesSearch = cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.verificationCode?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = !selectedCourse || cert.courseName === selectedCourse;
    return matchesTab && matchesSearch && matchesCourse;
  });

  

  const certificationStat = [
    { label: 'Total Certificates', value: '5', icon: Award, color: 'purple' },
    { label: 'Issued', value: '3', icon: CheckCircle, color: 'emerald' },
    { label: 'Pending', value: '1', icon: AlertCircle, color: 'amber' },
    { label: 'Revoked', value: '1', icon: XCircle, color: 'red' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto p-6">
        <DashboardStats stats={certificationStat}/>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex gap-8 px-6">
              {tabs.map((tab) => (
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-b-lg shadow-sm overflow-hidden">
            {filteredCertificates.length ? (
              <CertificationTable 
                certificationData={filteredCertificates}
                certificationColumnHeader={certificationColumnHeader}
              />
            ) : (
              <NoCertificateIssued />
            )}
          </div>
      </div>
      </div>

      {/* Generate Certificate Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Generate Certificate</h2>
              <p className="text-gray-500 text-sm mt-1">Create a new certificate for a student</p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Course
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white">
                    <option>-- Select Course --</option>
                    {courses.map(course => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="Enter student name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Email
                </label>
                <input
                  type="email"
                  placeholder="student@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Completion Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 mt-0.5"
                  />
                  <div>
                    <span className="font-medium text-gray-900">Send certificate via email</span>
                    <p className="text-sm text-gray-500">Automatically email the certificate to the student</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowGenerateModal(false)}
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Generate Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verify Certificate Modal */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Verify Certificate</h2>
              <p className="text-gray-500 text-sm mt-1">Enter a verification code to check certificate authenticity</p>
            </div>

            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Code
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="e.g., AI2024-XY7Z-4K9P"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none font-mono"
              />
              <p className="text-xs text-gray-500 mt-2">
                The verification code can be found on the certificate document
              </p>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowVerifyModal(false)}
                className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Verify Certificate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LMSAdminCertifications;
