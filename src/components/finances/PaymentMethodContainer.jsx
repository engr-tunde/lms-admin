import { useState } from "react";
import { PlusIcon } from "../globals/Icons";


import PaymentMethodCard from "./PaymentMethodCard";
import AddPaymentModal from "./add-payment-modal";

const PayoutMethodContainer = () => {
  const [openPaymentModal, setopenPaymentModal] = useState(false);

  const paymentMethods = [
    {
      id: 1,
      type: 'Bank Account',
      name: 'Chase Bank',
      details: '****1234',
      isDefault: true,
      verified: true
    },
    {
      id: 2,
      type: 'PayPal',
      name: 'PayPal Account',
      details: 'user@example.com',
      isDefault: false,
      verified: true
    },
    {
      id: 3,
      type: 'Stripe',
      name: 'Stripe Connect',
      details: 'Connected',
      isDefault: false,
      verified: true
    }
  ];

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            Manage your payout methods. Set a default method for automatic payouts.
          </p>
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-2"
            onClick={() => setopenPaymentModal(true)}
          >
            <PlusIcon className="w-4 h-4" />
            Add Payment Method
          </button>
        </div>
  
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard 
              key={method.id} 
              method={method} 
            />
          ))}
        </div>
      </div>
      {openPaymentModal && (
        <AddPaymentModal 
          onClose={() => setopenPaymentModal(false)}
          show={openPaymentModal}
        />
      )}
    </>
  )
}

export default PayoutMethodContainer;