import { Input } from "postcss"
import { ChevronDownIcon, ClockIcon } from "../../../globals/Icons"
import InputField from "../../../forms/InputField"

const AssessmentConfiguration = ({ assessmentData, setAssessmentData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Test Title
        </label>
        <input
          type="text"
          value={assessmentData.title}
          onChange={(e) => setAssessmentData({...assessmentData, title: e.target.value})}
          placeholder="Enter test title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <ClockIcon className="w-4 h-4 inline mr-2" />
            Time Limit (minutes)
          </label>
          {/* <InputField
            name="duration" 
            placeholder="e.g., 60"
          />   */}
          <input
            type="number"
            value={assessmentData.duration}
            onChange={(e) => setAssessmentData({...assessmentData, duration: e.target.value})}
            placeholder="e.g., 60"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passing Score (%)
          </label>
          <input
            type="number"
            value={assessmentData.passingScore}
            onChange={(e) => setAssessmentData({...assessmentData, passingScore: e.target.value})}
            placeholder="e.g., 70"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
          {/* <InputField
            name="passingScore" 
            placeholder="e.g., 70"
          /> */}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Attempts Allowed
        </label>
        <div className="relative">
          <select 
            value={assessmentData.attempts}
            onChange={(e) => setAssessmentData({...assessmentData, attempts: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>Unlimited</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
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