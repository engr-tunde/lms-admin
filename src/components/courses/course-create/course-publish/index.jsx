import { useState } from 'react';
import { CheckCircle, Eye } from 'lucide-react';
import PostPublish from './PostPublish';
import CoursePreview from './CoursePreview';
import MaterialPreview from './MaterialPreview';
import RequirementsPreview from './RequirementsPreview';
import SettingsPreview from './SettingsPreview';
import PublishStatusCheck from './PublishStatusCheck';
import PricePreview from './PricePreview';
import { publishCourse } from '../../../../api';
import { errorNotification, successNotification } from '../../../../utils/helpers';

function CoursePublish({ course, onStepComplete, setActiveTab }) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [showPostPublish, setShowPostPublish] = useState(false);

  console.log('Course Data:', course);

  const handlePublish = async () => {
    try {
      setIsPublishing(true);
      const response = await publishCourse({ status: true }, course?._id);
  
      if (response.status.toString().startsWith("20")) {
        successNotification(response?.data?.message);
        onStepComplete()
        setShowPostPublish(true);
      } else {
        errorNotification(response?.data?.message);
      }
    } catch (error) {
      errorNotification(error.message || "Something went wrong");
    } finally {
      setIsPublishing(false);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Course Overview', step: 1, completed: true },
    { id: 'materials', label: 'Course Materials', step: 2, completed: true },
    { id: 'requirements', label: 'Requirements & Audience', step: 3, completed: true },
    { id: 'pricing', label: 'Pricing', step: 4, completed: true },
    { id: 'publish', label: 'Publish', step: 5, completed: false }
  ];

  if (showPostPublish) return <PostPublish setShowPostPublish={setShowPostPublish} />;

  return (
    <>
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
      <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
      <div>
        <h3 className="font-semibold text-blue-900">Preview Mode</h3>
        <p className="text-sm text-blue-700">Review all course details before publishing. You can edit any section by going back to previous steps.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <CoursePreview course={course} setActiveTab={setActiveTab} />
        <MaterialPreview course={course} setActiveTab={setActiveTab} />
        <RequirementsPreview course={course} setActiveTab={setActiveTab} />
      </div>
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          <PricePreview course={course} setActiveTab={setActiveTab} />
          <SettingsPreview course={course} />
          <PublishStatusCheck course={course} setActiveTab={setActiveTab} />
          <div className="space-y-3">
            <button 
              onClick={handlePublish}
              disabled={isPublishing}
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:bg-purple-400"
            >
              {isPublishing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Publishing...
                </>
              ) : (
                course?.status !== "published" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Publish Course
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Publish Updates
                  </>
                )
              )}
            </button>
            <button 
              className="w-full px-6 py-2.5 text-gray-600 hover:text-gray-700 font-medium transition-colors"
              onClick={() => {setActiveTab("pricing")}}
            >
              ← Back to Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CoursePublish;