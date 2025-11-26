import { Building2, CreditCard, DollarSign } from "lucide-react";

const PaymentOptions = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start gap-3 mb-6">
        <DollarSign className="w-6 h-6 text-purple-600 mt-1" />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
          <p className="text-gray-500 text-sm mt-1">Choose how you'd like to receive payments</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setPaymentMethod('bank')}
          className={`p-4 border-2 rounded-lg transition-all ${
            paymentMethod === 'bank'
              ? 'border-purple-600 bg-purple-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Building2 className={`w-6 h-6 mb-2 ${paymentMethod === 'bank' ? 'text-purple-600' : 'text-gray-400'}`} />
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
          <CreditCard className={`w-6 h-6 mb-2 ${paymentMethod === 'card' ? 'text-purple-600' : 'text-gray-400'}`} />
          <div className="text-left">
            <div className="font-medium text-gray-900">PayPal / Stripe</div>
            <div className="text-sm text-gray-500">Receive via payment gateway</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default PaymentOptions;