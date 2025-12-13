import { useNavigate } from "react-router-dom"
import StatusCheck from "../globals/StatusCheck"
import { MoreVertical } from "lucide-react"
import { capitalize, compactDateFormatter } from "../../utils/helpers"

const RecentUsersCard = ({ recentUsers = [] }) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Recently Added Users
        </h2>
        <button
          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          onClick={() => navigate("/users")}
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-5 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <StatusCheck value={capitalize(user.status)} />
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>

            {/* Body */}
            <div className="my-4">
              <div className="font-semibold text-gray-900 text-lg mb-1">
                {user.name}
              </div>

              <div className="text-sm text-gray-600 mb-3">
                {user.email}
              </div>

              <div className="text-sm text-gray-600">
                <span className="font-semibold">Joined:</span>{" "}
                {compactDateFormatter(user.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentUsersCard
