import { useState } from "react";
import { coursePublishValues } from "../../../../utils/initialValues";
import { validateCoursePublishValues } from "../../../../utils/validate";
import PriceCard from "./PriceCard";
import CustomModal from "../../../globals/Modals";



const CreatePublish = () => {

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

  const initialValues = coursePublishValues();
  const validationSchema = validateCoursePublishValues();

  return (
    <div className="space-y-6">
      <CustomModal
        title=""
        onSubmit={() => console.log("Submitted")}
        initialValues={initialValues}
        validationSchema={validationSchema}
        description={""}
      >
        <PriceCard 
          courseData={courseData}
          setCourseData={setCourseData}
        />
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => setActiveTab('materials')}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            ← Back to Requirements
          </button>
          <button 
            onClick={() => setActiveTab('publish')}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </CustomModal>
    </div>
  )
}

export default CreatePublish;



