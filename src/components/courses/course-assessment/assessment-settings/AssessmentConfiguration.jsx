import { ClockIcon } from "../../../globals/Icons"
import InputField from "../../../forms/InputField"
import SelectField from "../../../forms/SelectField"

const AssessmentConfiguration = ({ assessmentData, setAssessmentData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Test Title
        </label>
        <InputField
          name="title" 
          placeholder="Enter test title"
        />  
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <ClockIcon className="w-4 h-4 inline mr-2" />
            Time Limit (minutes)
          </label>
          <InputField
            name="duration" 
            placeholder="e.g., 60"
          />  
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passing Score (%)
          </label>
          <InputField
            name="passingScore" 
            placeholder="e.g., 70"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Attempts Allowed
        </label>
        <div className="relative">
          <SelectField
            name="attempts"
            array={attemptsAllowed}
          />
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={assessmentData.shuffleQuestions}
            onChange={(e) => setAssessmentData({...assessmentData, shuffleQuestions: e.target.checked})}
            className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
          />
          <div>
            <span className="font-medium text-gray-900">Shuffle Questions</span>
            <p className="text-sm text-gray-500">Randomize question order for each student</p>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={assessmentData.showResults}
            onChange={(e) => setAssessmentData({...assessmentData, showResults: e.target.checked})}
            className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
          />
          <div>
            <span className="font-medium text-gray-900">Show Results Immediately</span>
            <p className="text-sm text-gray-500">Display score and answers after submission</p>
          </div>
        </label>
      </div>
    </div>
  )
}

export default AssessmentConfiguration



const attemptsAllowed = [
  { value: "1", title: "1" },
  { value: "2", title: "2" },
  { value: "3", title: "3" },
  { value: "unlimited", title: "Unlimited" },
]