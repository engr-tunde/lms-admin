import { addMaterial } from "../../../../api";
import { courseCurriculumValues } from "../../../../utils/initialValues";
import { validateCourseCurriculum } from "../../../../utils/validate";
import InputField from "../../../forms/InputField";
import SubmitButton from "../../../forms/SubmitButton";
import TextAreaField from "../../../forms/TextAreaField";
import CustomModal from "../../../globals/Modals";
import { successNotification, errorNotification } from "../../../../utils/helpers";
import { useParams } from "react-router-dom";

const NewSectionCard = ({ onCancel, mutate }) => {

  const { id: courseId } = useParams();

  let initialValues = courseCurriculumValues();
  const validationSchema = validateCourseCurriculum();

  const handleSubmit = async (values) => {
    const response = await addMaterial(values, courseId)
    if (response.status.toString().includes("20")) {

    successNotification(response.data?.message);
    console.log("response", response.data)
    mutate();
    } else {
      errorNotification(response?.data?.message);
    }
    
  }
  
  return (
    <div className="bg-white px-6 py-8 rounded-lg border-2 border-purple-200">
      <CustomModal
        title="New Section"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <InputField 
            name="title" 
            placeholder="Enter a Title"
          />
          <TextAreaField
            name="objective"
            placeholder="Enter a Learning Objective"
            rows={2}
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <SubmitButton
            title="Add Section"
            className={`px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors`}
          />
        </div>
      </CustomModal>
    </div>
  );
};


export default NewSectionCard;