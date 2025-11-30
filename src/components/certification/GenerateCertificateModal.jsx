import { ChevronDownIcon } from "../globals/Icons"

const GenerateCertificateModal = ({ setShowGenerateModal, courses }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Generate Certificate</h2>
          <p className="text-gray-500 text-sm mt-1">Create a new certificate for a student</p>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Course
            </label>
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white">
                <option>-- Select Course --</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student Name
            </label>
            <input
              type="text"
              placeholder="Enter student name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Student Email
            </label>
            <input
              type="email"
              placeholder="student@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Completion Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 mt-0.5"
              />
              <div>
                <span className="font-medium text-gray-900">Send certificate via email</span>
                <p className="text-sm text-gray-500">Automatically email the certificate to the student</p>
              </div>
            </label>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={() => setShowGenerateModal(false)}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Generate Certificate
          </button>
        </div>
      </div>
    </div>
  )
}

export default GenerateCertificateModal