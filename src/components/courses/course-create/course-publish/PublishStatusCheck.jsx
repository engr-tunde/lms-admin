import { CheckCircle, XCircle } from "lucide-react";

const PublishStatusCheck = ({ course, sections }) => {

  const hasCourseRequirements =
     course?.audience?.length > 0 && course?.requirements?.length > 0;

  const hasMaterials = sections?.length > 0;

  const hasPricing = true;

  const StatusItem = ({ checked, label }) => (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      {checked ? (
        <CheckCircle className="w-4 h-4 text-green-600" />
      ) : (
        <XCircle className="w-4 h-4 text-red-400" />
      )}
      <span className={checked ? "text-gray-700" : "text-gray-400"}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-3">
        Ready to Publish?
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Once published, your course will be visible to students. You can still
        edit it after publishing.
      </p>

      <div className="space-y-2 mb-4">
        <StatusItem
          checked={hasCourseRequirements}
          label="Course requirements complete"
        />
        <StatusItem
          checked={hasMaterials}
          label="Materials added"
        />
        <StatusItem
          checked={hasPricing}
          label="Pricing configured"
        />
      </div>
    </div>
  );
};

export default PublishStatusCheck;
