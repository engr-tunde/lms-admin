import { useEffect, useState } from 'react';
import PayoutTable from './PayoutTable';
import PayoutMethodContainer from './PaymentMethodContainer';


function ManageFinances() {
  const [activeTab, setActiveTab] = useState("orders")

  const tabs = [
    { id: "orders", label: "Orders" },
    { id: "payments", label: "Payments" },
  ];

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
      {activeTab === 'orders' && (
          <PayoutTable />
      )}
      {activeTab === 'payments' && (
        <PayoutMethodContainer />
      )}
      {/* {activeTab === 'payoutSettings' && (
        <PaymentSettings  />
      )} */}
    </div>
  );
}

export default ManageFinances;