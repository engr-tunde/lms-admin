import React, { useState } from 'react';
import { Award, Search, Filter, Download, Eye, CheckCircle, XCircle, AlertCircle, Calendar, User, FileText, Send, Plus, Edit2, Trash2, ChevronDown, Copy, ExternalLink } from 'lucide-react';
import CertificationTable from './CertificationTable';
import { NoCertificateIssued } from "../globals/NoValuesPage"
import { certificationColumnHeader, certificationData } from '../../data/certificationData';
import Pagination from '../globals/Pagination';

function ManageCertification() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Certificates', count: certificationData.length },
    { id: 'issued', label: 'Issued', count: certificationData.filter(c => c.status === 'issued').length },
    { id: 'pending', label: 'Pending', count: certificationData.filter(c => c.status === 'pending').length },
    { id: 'revoked', label: 'Revoked', count: certificationData.filter(c => c.status === 'revoked').length }
  ];

  const filteredCertificates = certificationData.filter(cert => {
    const matchesTab = activeTab === 'all' || cert.status === activeTab;
    return matchesTab
  });

  return (
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
          <>
            <CertificationTable 
              certificationData={filteredCertificates}
              certificationColumnHeader={certificationColumnHeader}
            />
            <Pagination />
          </>
        ) : (
          <NoCertificateIssued />
        )}
      </div>
    </div>
  );
}

export default ManageCertification;
