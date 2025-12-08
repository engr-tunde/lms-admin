import { AwardIcon, ClockIcon } from "../../../globals/Icons";

const SettingsPreview = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Course Settings</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AwardIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Certificate</span>
          </div>
          <span className={`text-sm font-medium ${course?.certificate ? 'text-green-600' : 'text-gray-500'}`}>
            {course?.certificate ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Duration</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{course?.duration}</span>
        </div>
      </div>
    </div>
  )
}

export default SettingsPreview;