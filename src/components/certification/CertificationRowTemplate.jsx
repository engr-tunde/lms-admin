import { AlertCircle, CheckCircle, Copy, Eye, Send, XCircle } from "lucide-react"
import { CalendarIcon, DocumentTextIcon, DownloadIcon, TrashIcon, UserIcon } from "../globals/Icons"

const CertificationRowTemplate = ({ cert }) => {

  const getStatusBadge = (status) => {
    const styles = {
      issued: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      pending: 'bg-amber-100 text-amber-700 border-amber-200',
      revoked: 'bg-red-100 text-red-700 border-red-200'
    };
    const icons = {
      issued: <CheckCircle className="w-3.5 h-3.5" />,
      pending: <AlertCircle className="w-3.5 h-3.5" />,
      revoked: <XCircle className="w-3.5 h-3.5" />
    };
    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <tr key={cert.id} className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <UserIcon className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">{cert.studentName}</div>
            <div className="text-sm text-gray-500">{cert.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <DocumentTextIcon className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">{cert.courseName}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarIcon className="w-4 h-4 text-gray-400" />
          {cert.issueDate}
        </div>
      </td>
      <td className="px-6 py-4">
        {cert.verificationCode ? (
          <div className="flex items-center gap-2">
            <code className="px-3 py-1.5 bg-gray-100 rounded text-sm font-mono text-gray-700">
              {cert.verificationCode}
            </code>
            <button
              onClick={() => copyToClipboard(cert.verificationCode)}
              className="p-1.5 hover:bg-gray-100 rounded transition-colors"
              title="Copy code"
            >
              <Copy className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        ) : (
          <span className="text-gray-400 text-sm">Not generated</span>
        )}
      </td>
      <td className="px-6 py-4">
        {getStatusBadge(cert.status)}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="View certificate"
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Download certificate"
          >
            <DownloadIcon className="w-4 h-4 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Send to student"
          >
            <Send className="w-4 h-4 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-red-100 rounded-lg transition-colors"
            title="Revoke certificate"
          >
            <TrashIcon className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default CertificationRowTemplate