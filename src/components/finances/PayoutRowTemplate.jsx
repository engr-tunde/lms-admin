import { CheckCircle, MoreVertical, XCircle } from "lucide-react";
import { AlertCircleIcon, CalendarIcon, ClockIcon, CreditCardIcon } from "../globals/Icons";
import { capitalize, compactDateFormatter } from "../../utils/helpers";

const PayoutRowTemplate = ({ item }) => {
  console.log("Payout Row Item:", item);

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      processing: 'bg-blue-50 text-blue-700 border-blue-200',
      failed: 'bg-red-50 text-red-700 border-red-200'
    };
  
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {capitalize(status)}
      </span>
    );
  };
    
  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      case 'processing':
        return <AlertCircleIcon className="w-5 h-5 text-blue-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };
  
  return (
    <tr key={item?._id} className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {getStatusIcon(item?.payment_status)}
            <span className="text-sm text-gray-600">{item?.payment_reference?.slice(0, 7)}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{item?.course_title}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="font-semibold text-gray-900">
          ${item?.total_paid?.toLocaleString()}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-gray-400" />
          {compactDateFormatter(item?.created_at)}
        </div>
      </td>
      <td className="px-6 py-4">
        {getStatusBadge(item?.payment_status)}
      </td>
      <td className="px-6 py-4">
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </td>
    </tr>
  )
}

export default PayoutRowTemplate;