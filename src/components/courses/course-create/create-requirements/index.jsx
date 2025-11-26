import { useState } from "react";
import OtherDetailsCard from "./OtherDetailsCard";
import RequirementsCard from "./RequirementsCard";
import TargetAudienceCard from "./TargetAudienceCard";



const CreateRequirements
 = () => {
  const [courseData, setCourseData] = useState({
    price: '',
    currency: 'USD',
    isFree: false,
    hasDiscount: false,
    discountPrice: '',
    requirements: [''],
    targetAudience: [''],
    duration: '',
    certificateEnabled: true
  });

  return (
    <div className="flex flex-col gap-6">
      <RequirementsCard courseData={courseData} setCourseData={setCourseData} />
      <TargetAudienceCard courseData={courseData} setCourseData={setCourseData} />
      <OtherDetailsCard courseData={courseData} setCourseData={setCourseData} />
      <div className="flex justify-between">
        <button 
          onClick={() => setActiveTab('materials')}
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          ← Back to Materials
        </button>
        <button 
          onClick={() => setActiveTab('publish')}
          className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Continue to Publish →
        </button>
      </div>
    </div>
  )
}

export default CreateRequirements
;

