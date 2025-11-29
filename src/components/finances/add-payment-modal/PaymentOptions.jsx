import { XIcon } from "lucide-react";
import { DollarIcon, BuildingIcon, CreditCardIcon } from "../../globals/Icons"

const PaymentOptions = ({ paymentMethod, setPaymentMethod, onClose }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 mb- mt-6">
          <DollarIcon className="w-6 h-6 text-purple-600" />
          <div className="text-xl font-semibold text-gray-900">
            Payment Method
          </div>
        </div>
        <button
          onClick={onClose}
        >
          <XIcon className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" />
        </button>
      </div>
      
      <hr className="mb-12 border-merseBorder border" />

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setPaymentMethod('bank')}
          className={`p-4 border-2 rounded-lg transition-all ${
            paymentMethod === 'bank'
              ? 'border-purple-600 bg-purple-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <BuildingIcon className={`w-6 h-6 mb-2 ${paymentMethod === 'bank' ? 'text-purple-600' : 'text-gray-400'}`} />
          <div className="text-left">
            <div className="font-medium text-gray-900">Bank Transfer</div>
            <div className="text-sm text-gray-500">Direct deposit to your bank account</div>
          </div>
        </button>

        <button
          onClick={() => setPaymentMethod('card')}
          className={`p-4 border-2 rounded-lg transition-all ${
            paymentMethod === 'card'
              ? 'border-purple-600 bg-purple-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <CreditCardIcon className={`w-6 h-6 mb-2 ${paymentMethod === 'card' ? 'text-purple-600' : 'text-gray-400'}`} />
          <div className="text-left">
            <div className="font-medium text-gray-900">PayPal / Stripe</div>
            <div className="text-sm text-gray-500">Receive via payment gateway</div>
          </div>
        </button>
      </div>
    </>
  )
}

export default PaymentOptions;