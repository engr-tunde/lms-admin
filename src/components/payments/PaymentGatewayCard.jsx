import { AlertCircle, CreditCard, Mail, MapPin, Phone, User } from "lucide-react";

const PaymentGatewayCard = ({ }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-start gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-purple-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Payment Gateway Details</h2>
            <p className="text-gray-500 text-sm mt-1">Connect your PayPal or Stripe account</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PayPal Email Address
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button className="w-full px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Connect Stripe Account
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">You'll be redirected to Stripe to complete the connection</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-start gap-3 mb-6">
          <User className="w-6 h-6 text-purple-600 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            <p className="text-gray-500 text-sm mt-1">We'll use this to contact you about payments</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Billing Address
            </label>
            <textarea
              placeholder="Enter your complete billing address"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-gray-900 font-medium">Payment Processing Information</p>
          <p className="text-sm text-gray-600 mt-1">
            Payments are processed on the 15th of each month. Ensure your details are accurate to avoid delays. 
            It may take 3-5 business days for funds to appear in your account.
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
        <button className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
          Save Payment Details
        </button>
      </div>
    </>
  )
}

export default PaymentGatewayCard;