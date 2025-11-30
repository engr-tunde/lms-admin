import { useState } from "react";

const VerifyCertificateModal = ({ setShowVerifyModal }) => {
  const [verificationCode, setVerificationCode] = useState('');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Verify Certificate</h2>
          <p className="text-gray-500 text-sm mt-1">Enter a verification code to check certificate authenticity</p>
        </div>

        <div className="p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verification Code
          </label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="e.g., AI2024-XY7Z-4K9P"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none font-mono"
          />
          <p className="text-xs text-gray-500 mt-2">
            The verification code can be found on the certificate document
          </p>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={() => setShowVerifyModal(false)}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Verify Certificate
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerifyCertificateModal