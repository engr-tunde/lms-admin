import { CheckCircle } from "lucide-react";

const PublishStatusCheck = ({ course }) => {

  if ( course?.progress_status !== "pricing") return null;

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-3">Ready to Publish?</h3>
      <p className="text-sm text-gray-600 mb-4">
        Once published, your course will be visible to students. You can still edit it after publishing.
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span>Course details complete</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span>Materials added</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span>Pricing configured</span>
        </div>
      </div>
    </div>
  )
}

export default PublishStatusCheck;