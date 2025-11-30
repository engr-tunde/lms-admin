import { useState } from 'react';
import PayoutTable from './PayoutTable';
import PayoutMethodContainer from './PaymentMethodContainer';
import PaymentSettings from './PaymentSettings';
import { payoutsColumnHeader, payoutsData } from "../../data/payoutsData";
import { NoPayoutMade } from "../globals/NoValuesPage"


function ManageFinances() {
  const [activeTab, setActiveTab] = useState("payoutHistory")
  const [filterStatus, setFilterStatus] = useState('all');
  

  const tabs = [
    { id: "payoutHistory", label: "Payout History" },
    { id: "payoutMethod", label: "Payout Method" },
    { id: "payoutSettings", label: "Payout Settings" },
  ];

  const filteredPayouts = payoutsData.filter(payout => {
    if (filterStatus !== 'all' && payout.status !== filterStatus) return false;
    return true;
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
      {activeTab === 'payoutHistory' && (
        filteredPayouts.length ? (
          <PayoutTable 
            filteredPayouts={filteredPayouts}
            payoutsColumnHeader={payoutsColumnHeader}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        ) : (
          <NoPayoutMade />
        )
      )}
      {activeTab === 'payoutMethod' && (
        <PayoutMethodContainer />
      )}
      {activeTab === 'payoutSettings' && (
        <PaymentSettings  />
      )}
    </div>
  );
}

export default ManageFinances;