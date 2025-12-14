import { Clock, Edit2, Globe } from "lucide-react";
import { capitalize } from "../../../../utils/helpers";

const CoursePreview = ({ course, setActiveTab }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{course?.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {capitalize(course?.category)}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {capitalize(course?.level)}
            </span>
          </div>
        </div>
        <button 
          onClick={() => setActiveTab("overview")}
          className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
        >
          <Edit2 className="w-4 h-4" />
          Edit
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Globe className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-xs text-gray-500">Language</p>
            <p className="font-medium text-gray-900">{course?.language}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Clock className="w-5 h-5 text-gray-600" />
          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="font-medium text-gray-900">{course?.duration}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">Course Description</h3>
        <p className="text-gray-700">{course?.description}</p>
      </div>
    </div>
  )
}


export default CoursePreview;