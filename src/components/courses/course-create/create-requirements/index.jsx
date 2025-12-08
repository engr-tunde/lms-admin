import { useEffect, useState } from "react";
import OtherDetailsCard from "./OtherDetailsCard";
import RequirementsCard from "./RequirementsCard";
import TargetAudienceCard from "./TargetAudienceCard";
import CustomModal from "../../../globals/Modals";
import { validateCourseRequirementValues } from "../../../../utils/validate";
import { courseRequirementsValues } from "../../../../utils/initialValues";
import SubmitButton from "../../../forms/SubmitButton";
import { addRequirements, updateRequirements } from "../../../../api/index"
import { errorNotification, successNotification } from "../../../../utils/helpers";



const CreateRequirements = ({ setActiveTab, onStepComplete, course }) => {

  console.log("course", course)
  const initialValues = course 
    ? {
        ...courseRequirementsValues(),
        requirements: course?.requirements,
        audience: course?.audience,
        duration: course?.duration,
        certificate: course?.certificate,
      }
    : courseRequirementsValues();

  console.log("course", course)
  const validationSchema = validateCourseRequirementValues();

  const handleSubmit = async (values) => {
    const response = await addRequirements(values, course?._id)
    if (response.status.toString().includes("20")) {
      successNotification(response?.data?.message);
      onStepComplete();
    } else {
      errorNotification(response?.data?.message);
    }
  }
  // const handleUpdate = async (values) => {
  //   const response = await updateRequirements(values, course?._id)
  //   if (response.status.toString().includes("20")) {
  //     successNotification(response?.data?.message);
  //     onStepComplete();
  //   } else {
  //     errorNotification(response?.data?.message);
  //   }
  // }


  return (
    <CustomModal
      title=""
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      description={""}
    > 
      <div className="flex flex-col gap-6">
        <RequirementsCard courseId={course?._id} />
        <TargetAudienceCard />
        <OtherDetailsCard />
      </div>

      <div className="flex justify-between mt-8">
        <button 
          type="button"
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          onClick={() => setActiveTab("materials")}
        >
          ← Back to Materials
        </button>
        <SubmitButton 
          title="Save and Continue →"
          className="continue-button"
        />
      </div>
    </CustomModal>
  )
}

export default CreateRequirements
;

