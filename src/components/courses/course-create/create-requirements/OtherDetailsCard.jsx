import { ClockIcon, AwardIcon } from "../../../globals/Icons";



const OtherDetailsCard = ({ courseData, setCourseData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Course Settings</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <ClockIcon className="w-4 h-4 inline mr-2" />
            Estimated Duration
          </label>
          <input
            type="text"
            value={courseData.duration}
            onChange={(e) => setCourseData({...courseData, duration: e.target.value})}
            placeholder="e.g., 8 weeks, 20 hours"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <AwardIcon className="w-4 h-4 inline mr-2" />
            Certificate
          </label>
          <div className="flex items-center gap-4 h-[52px]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={courseData.certificateEnabled}
                onChange={(e) => setCourseData({...courseData, certificateEnabled: e.target.checked})}
                className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
              />
              <span className="text-gray-700">Provide certificate upon completion</span>
            </label>
          </div>
        </div>
      </div>
  </div>
  )
}

export default OtherDetailsCard;
