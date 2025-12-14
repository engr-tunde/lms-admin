import { useEffect, useState } from 'react';
import OrdersTable from './OrdersTable';
import PaymentsTable from './PaymentsTable';
import { useLocation, useSearchParams } from 'react-router-dom';


function ManageFinances() {
  const [activeTab, setActiveTab] = useState("orders")

  const tabs = [
    { id: "orders", label: "Orders" },
    { id: "payments", label: "Payments" },
  ];
  
  const location = useLocation();

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
  }, [location.state]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="border-b border-gray-200">
        <div className="flex gap-8 px-6">
          {tabs.map((tab, i) => (
            <button
              key={i}
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
          <OrdersTable />
      )}
      {activeTab === 'payments' && (
        <PaymentsTable />
      )}
    </div>
  );
}

export default ManageFinances;