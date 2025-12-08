import { BookOpen, Edit2, Users } from "lucide-react"

const RequirementsPreview = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Requirements & Audience</h2>
        <button className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2">
          <Edit2 className="w-4 h-4" />
          Edit
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-gray-900">Course Requirements</h3>
        </div>
        <ul className="space-y-2">
          {course?.requirements?.map((req, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-purple-600 mt-1">•</span>
              <span className="text-sm">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold text-gray-900">Target Audience</h3>
        </div>
        <ul className="space-y-2">
          {course?.audience?.map((audience, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-purple-600 mt-1">•</span>
              <span className="text-sm">{audience}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RequirementsPreview;