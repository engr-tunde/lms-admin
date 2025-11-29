import { CheckCircle } from "lucide-react";
import { CreditCardIcon, PlusIcon } from "../../globals/Icons";


const PaymentMethodCard = ({ method }) => {
  return (
    <div
      key={method.id}
      className={`p-6 border-2 rounded-lg transition-all ${
        method.isDefault
          ? 'border-purple-500 bg-purple-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            method.isDefault ? 'bg-purple-100' : 'bg-gray-100'
          }`}>
            <CreditCardIcon className={`w-6 h-6 ${
              method.isDefault ? 'text-purple-600' : 'text-gray-600'
            }`} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-semibold text-gray-900">{method.name}</h3>
              {method.isDefault && (
                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                  Default
                </span>
              )}
              {method.verified && (
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{method.type}</p>
            <p className="text-sm text-gray-500 mt-1">{method.details}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!method.isDefault && (
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Set as Default
            </button>
          )}
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Edit
          </button>
          <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}; 


export default PaymentMethodCard;