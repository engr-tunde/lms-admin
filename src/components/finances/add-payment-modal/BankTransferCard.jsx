import { BuildingIcon, TrashIcon, PlusIcon } from "../../globals/Icons"

const BankTransferCard = ({ bankAccounts, addBankAccount, removeBankAccount, updateBankAccount }) => {
  
  return (
    <>
      <div className="flex items-start gap-3 mb-6">
        <div className="text-gray-500 text-sm mt-1">Add your bank account information for direct deposits</div>
      </div>

      <div className="space-y-6">
        {bankAccounts.map((account, index) => (
          <div key={account.id} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Account {index + 1}</h3>
              <div className="flex items-center gap-2">
                {account.isPrimary && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    Primary
                  </span>
                )}
                {bankAccounts.length > 1 && (
                  <button
                    onClick={() => removeBankAccount(account.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  value={account.accountName}
                  onChange={(e) => updateBankAccount(account.id, 'accountName', e.target.value)}
                  placeholder="Enter full name as on bank account"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={account.accountNumber}
                    onChange={(e) => updateBankAccount(account.id, 'accountNumber', e.target.value)}
                    placeholder="Enter account number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    value={account.bankName}
                    onChange={(e) => updateBankAccount(account.id, 'bankName', e.target.value)}
                    placeholder="Enter bank name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SWIFT/BIC Code (Optional)
                </label>
                <input
                  type="text"
                  value={account.swiftCode}
                  onChange={(e) => updateBankAccount(account.id, 'swiftCode', e.target.value)}
                  placeholder="For international transfers"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                />
              </div>

              {!account.isPrimary && (
                <button
                  onClick={() => setPrimaryAccount(account.id)}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Set as primary account
                </button>
              )}
            </div>
          </div>
        ))}

        <button
          onClick={addBankAccount}
          className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />
          Add Another Bank Account
        </button>
      </div>
    </>
  )
}

export default BankTransferCard;