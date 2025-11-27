import { useState } from "react";
import OtherDetailsCard from "./OtherDetailsCard";
import RequirementsCard from "./RequirementsCard";
import TargetAudienceCard from "./TargetAudienceCard";
import CustomModal from "../../../globals/Modals";
import { validateCourseRequirementValues } from "../../../../utils/validate";
import { courseRequirementsValues } from "../../../../utils/initialValues";
import SubmitButton from "../../../forms/SubmitButton";



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

  const initialValues = courseRequirementsValues();
  const validationSchema = validateCourseRequirementValues();

  return (
    <CustomModal
      title=""
      onSubmit={() => console.log("Submitted")}
      initialValues={initialValues}
      validationSchema={validationSchema}
      description={""}
    > 
      <div className="flex flex-col gap-10">
        <RequirementsCard courseData={courseData} setCourseData={setCourseData} />
        <TargetAudienceCard courseData={courseData} setCourseData={setCourseData} />
        <OtherDetailsCard courseData={courseData} setCourseData={setCourseData} />
      </div>

      <div className="flex justify-between mt-8">
        <button 
          onClick={() => setActiveTab('materials')}
          className="back-button"
        >
          ← Back to Materials
        </button>
        <SubmitButton 
          title="Continue to Publish →"
          onClick={() => setActiveTab('publish')}
          className="continue-button"
        />
      </div>
    </CustomModal>
  )
}

export default CreateRequirements
;

