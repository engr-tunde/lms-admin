import PaymentGatewayCard from './PaymentGatewayCard';
import BankTransferCard from './BankTransferCard';
import PaymentOptions from './PaymentOptions';
import { useState } from 'react';

function AddPaymentModal({show, onClose }) {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [bankAccounts, setBankAccounts] = useState([
    { id: 1, accountName: '', accountNumber: '', bankName: '', swiftCode: '', isPrimary: true }
  ]);

  const addBankAccount = () => {
    setBankAccounts([
      ...bankAccounts,
      { id: Date.now(), accountName: '', accountNumber: '', bankName: '', swiftCode: '', isPrimary: false }
    ]);
  };

  const removeBankAccount = (id) => {
    if (bankAccounts.length > 1) {
      setBankAccounts(bankAccounts.filter(account => account.id !== id));
    }
  };

  const updateBankAccount = (id, field, value) => {
    setBankAccounts(bankAccounts.map(account => 
      account.id === id ? { ...account, [field]: value } : account
    ));
  };

  const setPrimaryAccount = (id) => {
    setBankAccounts(bankAccounts.map(account => ({
      ...account,
      isPrimary: account.id === id
    })));
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] space-y-6">
        <PaymentOptions 
          paymentMethod={paymentMethod} 
          setPaymentMethod={setPaymentMethod}
          onClose={onClose}
        />
        {paymentMethod === 'bank' && 
          <BankTransferCard 
            bankAccounts={bankAccounts}
            addBankAccount={addBankAccount}
            removeBankAccount={removeBankAccount}
            updateBankAccount={updateBankAccount}
            setPrimaryAccount={setPrimaryAccount}
          />
        }
        {paymentMethod === 'card' && 
          <PaymentGatewayCard 
     
          />
        }
      </div>  
    </div>
  )
}

export default AddPaymentModal;