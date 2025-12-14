import { useNavigate } from "react-router-dom"
import StatusCheck from "../globals/StatusCheck"
import { MoreVertical } from "lucide-react"
import { capitalize, compactDateFormatter } from "../../utils/helpers"
import OrderDetailModal from "../finances/OrderDetailModal"
import { useState } from "react"

const RecentOrdersCard = ({ recentOrders = [] }) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Recently Added Orders
        </h2>
        <button
          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          onClick={() => navigate("/finances", { state: { tab: "orders" } })}
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentOrders.map((order) => (
          <>
          <div
            key={order._id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-5 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between mb-3">
              <StatusCheck value={capitalize(order.payment_status)} />
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>

            <div className="my-4">
              <div className="font-semibold text-gray-900 text-lg mb-3">
                {order.course_title}
              </div>

              <div className="flex flex-col gap-2">
                {order.payment_reference && (
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Ref:</span>{" "}
                    {order.payment_reference}
                  </div>
                )}

                {order.created_at && (
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Date:</span>{" "}
                    {compactDateFormatter(order.created_at)}
                  </div>
                )}
                <div className="text-sm font-medium text-gray-900">
                  {order.currency} {order.total_paid}
                </div>
              </div>
            </div>

            {/* Action */}
            <button
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setShowModal(true)}
            >
              View details
            </button>
          </div>
          <OrderDetailModal 
            isOpen={showModal} 
            onClose={() => setShowModal(false)} 
            order={order}
          />
          </>
        ))}
      </div>
    </div>
  )
}

export default RecentOrdersCard
