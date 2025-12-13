import { useNavigate } from "react-router-dom"
import StatusCheck from "../globals/StatusCheck"
import { Eye, MoreVertical } from "lucide-react"
import { capitalize } from "../../utils/helpers"

const RecentCoursesCard = ({ recentCourses = [] }) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Recently Added Courses
        </h2>
        <button
          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          onClick={() => navigate("/courses")}
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-5 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between mb-3">
              <StatusCheck value={capitalize(course.status)} />
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>

            <div className="my-4">
              <div className="font-semibold text-gray-900 text-lg mb-3">
                {course.title}
              </div>
              <div className="flex flex-col gap-2">
                {course?.category && (
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Category:</span> {course.category}
                </div>
                )}
                {course?.level && (
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Level:</span> {capitalize(course.level)}
                </div>
                )}
                {course?.duration && (
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </div>
                )}
                {course.price === 0 ? (
                  <div className="text-sm font-medium text-green-600">Free</div>
                ) : (
                  <div className="text-sm font-medium text-gray-900">
                    {course.currency} {course.price}
                  </div>
                )}
              </div>
            </div>

            <button
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => navigate(`/courses/create/${course?._id}`)}
            >
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentCoursesCard
