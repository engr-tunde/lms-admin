import { CheckCircle, MoreVertical, XCircle } from "lucide-react";
import { AlertCircleIcon, CalendarIcon, ClockIcon, CreditCardIcon } from "../../globals/Icons";

const PayoutRowTemplate = ({ payout }) => {

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      processing: 'bg-blue-50 text-blue-700 border-blue-200',
      failed: 'bg-red-50 text-red-700 border-red-200'
    };
  
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
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
    <tr key={payout.id} className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {getStatusIcon(payout.status)}
          <div>
            <p className="font-medium text-gray-900">{payout.id}</p>
            <p className="text-sm text-gray-500">{payout.description}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-900">
            {new Date(payout.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="font-semibold text-gray-900">
          ${payout.amount.toLocaleString()}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <CreditCardIcon className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{payout.method}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        {getStatusBadge(payout.status)}
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