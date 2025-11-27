import { basicCourseDetailValues } from "../../../utils/initialValues";
import { validateBasicCourseDetails } from "../../../utils/validate";
import CustomModal from "../../globals/Modals";
import InputField from "../../forms/InputField";
import SelectField from "../../forms/SelectField";
import TextAreaField from "../../forms/TextAreaField"
import { addOverview } from "../../../api"
import { errorNotification, successNotification } from "../../../utils/helpers";
import SubmitButton from "../../forms/SubmitButton"


const CreateCourseOverview = ({ categories, stepCompleted, setStepCompleted, setActiveTab }) => {
  const initialValues = basicCourseDetailValues()
  const validationSchema = validateBasicCourseDetails()

  const handleSubmit = async (values) => {
    const response = await addOverview(values);
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      setStepCompleted(prev => ({
        ...prev,
        overview: true
      }))
    } else {
      errorNotification(response?.data?.message);
    }
  }

  const submitAndContinue = (values) => {
    handleSubmit(values);
    setActiveTab("materials");
  }
  
  return (
      <CustomModal
        title="Add Course Details"
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        description={""}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white w-full px-6 py-10 shadow-sm rounded-lg border border-gray-200"
        >
          <div className="col-span-2">
            <InputField
              name="title"
              placeholder="Enter a title for this section"
            />
          </div>
          <div className="col-span-1"> 
            <SelectField
              name="category"
              title="Pick category from the options below"
              array={(categories || [])?.map((c) => ({
                value: c?.category, 
                title: c?.category,   
              }))}
            />
          </div>
          <div className="col-span-1">
            <SelectField
              name="language"
              title="Pick Preferred Language of Instruction"
              array={languageOptions}
            />
          </div>
          <div>
            <SelectField
              name="level"
              title="-- Select Level --"
              array={levelOptions}
            />
          </div>
          <div className="col-span-1">
            <InputField
              name="what_to_taught"
              placeholder="What will be primarily taught in this course?"
            />
          </div>
          <div className="mt-10 w-full col-span-2">
            <TextAreaField
              name="description"
              label="Course Description"
              placeholder="Write full details..."
              full={true}
              rows={8}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button type="submit" className="draft-button">
            Save Draft
          </button>
      
          <SubmitButton
            title="Continue to Materials"
            className="continue-button"
          />
        </div>
      </CustomModal>
  )
}

const categoryOptions = [
  { value: "programming", title: "Programming" },
  { value: "design", title: "Design" },
  { value: "marketing", title: "Marketing" },
  { value: "business", title: "Business" },
  { value: "photography", title: "Photography" },
]

const languageOptions = [
  { value: "en", title: "English" },
  { value: "es", title: "Spanish" },
  { value: "fr", title: "French" },
  { value: "de", title: "German" },
  { value: "zh", title: "Chinese" },
]

const levelOptions = [
  { value: "beginner", title: "Beginner Level" },
  { value: "intermediate", title: "Intermediate Level" },
  { value: "advanced", title: "Advanced Level" },
  { value: "all", title: "All Levels" },
]

export default CreateCourseOverview;