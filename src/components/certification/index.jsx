import React, { useState } from 'react';
import { Award, Search, Filter, Download, Eye, CheckCircle, XCircle, AlertCircle, Calendar, User, FileText, Send, Plus, Edit2, Trash2, ChevronDown, Copy, ExternalLink } from 'lucide-react';

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
    { id: 'all', label: 'All Certificates', count: certificates.length },
    { id: 'issued', label: 'Issued', count: certificates.filter(c => c.status === 'issued').length },
    { id: 'pending', label: 'Pending', count: certificates.filter(c => c.status === 'pending').length },
    { id: 'revoked', label: 'Revoked', count: certificates.filter(c => c.status === 'revoked').length }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesTab = activeTab === 'all' || cert.status === activeTab;
    const matchesSearch = cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.verificationCode?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = !selectedCourse || cert.courseName === selectedCourse;
    return matchesTab && matchesSearch && matchesCourse;
  });

  const getStatusBadge = (status) => {
    const styles = {
      issued: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-100 text-amber-700 border-amber-200',
      revoked: 'bg-red-100 text-red-700 border-red-200'
    };
    const icons = {
      issued: <CheckCircle className="w-3.5 h-3.5" />,
      pending: <AlertCircle className="w-3.5 h-3.5" />,
      revoked: <XCircle className="w-3.5 h-3.5" />
    };
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="cursor-pointer hover:text-gray-700">← Dashboard</span>
                <span>/</span>
                <span className="text-gray-900">Certifications</span>
              </div>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Award className="w-7 h-7 text-purple-600" />
                Certificate Management
              </h1>
              <p className="text-gray-500 mt-1">Generate, manage, and verify course completion certificates</p>
            </div>
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
                <Plus className="w-4 h-4" />
                Generate Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Certificates</p>
                <p className="text-2xl font-semibold text-gray-900">{certificates.length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Issued</p>
                <p className="text-2xl font-semibold text-emerald-600">
                  {certificates.filter(c => c.status === 'issued').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending</p>
                <p className="text-2xl font-semibold text-amber-600">
                  {certificates.filter(c => c.status === 'pending').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Revoked</p>
                <p className="text-2xl font-semibold text-red-600">
                  {certificates.filter(c => c.status === 'revoked').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by student name, course, or verification code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="relative w-full md:w-64">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white"
              >
                <option value="">All Courses</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 border-b-0">
          <div className="flex gap-1 p-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Table */}
        <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issue Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Verification Code
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCertificates.map(cert => (
                  <tr key={cert.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{cert.studentName}</div>
                          <div className="text-sm text-gray-500">{cert.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">{cert.courseName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {cert.issueDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {cert.verificationCode ? (
                        <div className="flex items-center gap-2">
                          <code className="px-3 py-1.5 bg-gray-100 rounded text-sm font-mono text-gray-700">
                            {cert.verificationCode}
                          </code>
                          <button
                            onClick={() => copyToClipboard(cert.verificationCode)}
                            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                            title="Copy code"
                          >
                            <Copy className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm">Not generated</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(cert.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="View certificate"
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Download certificate"
                        >
                          <Download className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Send to student"
                        >
                          <Send className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                          title="Revoke certificate"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCertificates.length === 0 && (
            <div className="text-center py-12">
              <Award className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No certificates found</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
            </div>
          )}
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