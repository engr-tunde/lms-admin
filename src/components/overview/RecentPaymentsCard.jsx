import { useNavigate } from "react-router-dom"
import StatusCheck from "../globals/StatusCheck"
import { MoreVertical } from "lucide-react"
import { capitalize, compactDateFormatter } from "../../utils/helpers"

const RecentPaymentsCard = ({ recentPayments = [] }) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Recently Added Payments
        </h2>
        <button
          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          onClick={() => navigate("/finances?tab=payments")}
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPayments.map((payment) => (
          <div
            key={payment._id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-5 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <StatusCheck value={capitalize(payment.payment_status)} />
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>

            {/* Body */}
            <div className="my-4">
              <div className="font-semibold text-gray-900 text-lg mb-3">
                {payment.order_title}
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Ref:</span>{" "}
                  {payment.payment_reference}
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Date:</span>{" "}
                  {compactDateFormatter(payment.created_at)}
                </div>

                <div className="text-sm font-medium text-gray-900">
                  {payment.currency} {payment.amount_paid}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPaymentsCard
