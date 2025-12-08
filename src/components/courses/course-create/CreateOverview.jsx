import { basicCourseDetailValues } from "../../../utils/initialValues";
import { validateBasicCourseDetails } from "../../../utils/validate";
import CustomModal from "../../globals/Modals";
import InputField from "../../forms/InputField";
import SelectField from "../../forms/SelectField";
import TextAreaField from "../../forms/TextAreaField"
import { addOverview, updateOverview } from "../../../api"
import { errorNotification, successNotification } from "../../../utils/helpers";
import SubmitButton from "../../forms/SubmitButton"
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../../api/index";
import { useEffect, useState } from "react";

const CreateCourseOverview = ({ onStepComplete, course }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { categories } = fetchCategories();

  useEffect(() => {
    if (course?._id) {
      setIsEditing(true);
    }
  }, [course]);

  const initialValues = course?._id
    ? {
        ...basicCourseDetailValues(),
        title: course.title || "",
        category: course.category || "",
        language: course.language || "",
        level: course.level || "",
        what_to_taught: course.what_to_taught || "",
        description: course.description || "",
      }
    : basicCourseDetailValues();
    
  const validationSchema = validateBasicCourseDetails()

  const handleSubmit = async (values) => {
    const response = await addOverview(values)

    if (!response.status.toString().includes("20")) {
      errorNotification(response?.data?.message);
    };
    const newCourseId = response.data?.data?.course_id;
    const courseData = response.data?.data?.courseData;
    if (!newCourseId) return errorNotification("Course creation failed");
    successNotification(`Course overview created successfully with ID: ${newCourseId}`);
    navigate(`/courses/create/${newCourseId}`, {
      state: {
        course: courseData,
        nextLabel: "materials",
      }
    });
  }
  const handleUpdate = async (values, id) => {
    const response = await updateOverview(values, id);
    if (!response.status.toString().includes("20")) {
      return errorNotification(response?.data?.message);
    }
    
    const updatedCourse = response.data?.data?.courseData;
    if (!updatedCourse) return;
    successNotification("Course overview updated successfully");
    navigate("", {
      state: {
        course: updatedCourse,
        nextLabel: "materials", 
      },
    });
  }

  const handleSubmitOrUpdate = async (values, continueNext = true) => {
    if (isEditing) {
      await handleUpdate(values, course._id);
    } else {
      await handleSubmit(values);
    }

    if (continueNext) {
      onStepComplete();         
    }
  };

  return (
      <CustomModal
        title=""
        onSubmit={handleSubmitOrUpdate}
        initialValues={initialValues}
        validationSchema={validationSchema}
        description={""}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white w-full px-6 py-10 shadow-sm rounded-lg border border-gray-200"
        >
          <div className="font-semibold mb-4">
            {isEditing ? "Edit Course Overview" : "Add Course Overview"}
          </div>
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
              array={(categories?.data || [])?.map((c) => ({ value: c?.category, title: c?.category }))}
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
          <SubmitButton
            title={isEditing ? "Update and Continue" : "Add and Continue"}
            className="continue-button"
          />
        </div>
      </CustomModal>
  )
}

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