import { basicCourseDetailValues } from "../../utils/initialValues";
import { validateBasicCourseDetails } from "../../utils/validate";
import CustomModal from "../globals/Modals";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";
import TextAreaField from "../forms/TextAreaField"


const CourseOverviewCard = () => {
  const initialValues = basicCourseDetailValues()
  const validationSchema = validateBasicCourseDetails()

  return (
  <div className="">
      <CustomModal
        onSubmit={() => console.log("submit")}
        onDraft={() => console.log("draft")}
        initialValues={initialValues}
        validationSchema={validationSchema}
        title="Add Course Details"
        submitButtonTitle="Continue"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputField
              name="courseTitle"
              placeholder="Enter a title for this section"
              colSpan={2}
            />
          </div>
          <SelectField
            name="courseCategory"
            title="Pick category from the options below"
            array={categoryOptions}
            colSpan={1}
          />
          <SelectField
            name="language"
            title="Pick Preferred Language of Instruction"
            array={languageOptions}
            colSpan={1}
          />
          <div className="mt-10 w-full col-span-2">
            <TextAreaField
              name="courseDescription"
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

export default CourseOverviewCard;