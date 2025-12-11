import { X, CheckCircle, Calendar, DollarSign, FileText } from 'lucide-react';
import { capitalize, dateFormatter } from '../../utils/helpers';

const OrderDetailModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl p-6 overflow-y-auto max-h-[90vh] space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Order Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {capitalize(order.payment_status)}
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Payment Reference</p>
            <p className="text-lg font-semibold text-gray-800">{order.payment_reference}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Course ID</label>
            <div className="text-base text-gray-800">{order.course_id}</div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Course Title</label>
            <div className="text-base text-gray-800">{order.course_title}</div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Owner ID</label>
            <div className="text-base text-gray-800">{order.owner}</div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Created At</label>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <div className="text-gray-800">{dateFormatter(order.created_at)}</div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Currency</label>
            <div className="text-base text-gray-800">{order.currency}</div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Original Total</label>
            <div className="text-base text-gray-800">{order.original_total}</div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Discount</label>
            <div className="text-base text-gray-800">{order.discount}</div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Subtotal</label>
            <div className="text-base text-gray-800">{order.subtotal}</div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-500">Total Paid</label>
            <div className="flex items-center gap-1">
              <DollarSign size={18} className="text-green-600" />
              <span className="text-lg font-semibold text-gray-800">{order.total_paid}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="edit-button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailModal;
