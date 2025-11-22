import { basicCourseDetailValues } from "../../utils/initialValues";
import { validateBasicCourseDetails } from "../../utils/validate";
import CustomModal from "../globals/Modals";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";
import TextAreaField from "../forms/TextAreaField"
import { addOverview } from "../../api"
import { errorNotification, successNotification } from "../../utils/helpers";


const CourseOverviewCard = ({ categories, stepCompleted, setStepCompleted, setActiveTab }) => {
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
  <div className="bg-white w-full px-6 py-10 shadow-sm rounded-lg border border-gray-200">
      <CustomModal
        onSubmit={submitAndContinue}
        onDraft={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        title="Add Course Details"
        submitButtonTitle="Continue to Materials"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputField
              name="title"
              placeholder="Enter a title for this section"
              colSpan={2}
            />
          </div>
          <SelectField
            name="category"
            title="Pick category from the options below"
            array={(categories || [])?.map((c) => ({
              value: c?.category, 
              title: c?.category,   
            }))}
            colSpan={1}
          />
          <SelectField
            name="language"
            title="Pick Preferred Language of Instruction"
            array={languageOptions}
            colSpan={1}
          />
          <SelectField
            name="level"
            title="-- Select Level --"
            array={levelOptions}
            colSpan={1}
          />
          <InputField
            name="what_to_taught"
            placeholder="What will be primarily taught in this course?"
            colSpan={1}
          />
          <div className="mt-10 w-full col-span-2">
            <TextAreaField
              name="description"
              label="Course Description"
              placeholder="Write full details..."
              full={true}
              rows={8}
              colSpan={2}
            />
          </div>
        </div>
      </CustomModal>
  </div>
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

export default CourseOverviewCard;