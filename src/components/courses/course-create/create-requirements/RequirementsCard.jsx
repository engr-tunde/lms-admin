import InputField from "../../../forms/InputField";
import { BookIcon, PlusIcon, TrashIcon } from "../../../globals/Icons";



const RequirementsCard = ({ courseData, setCourseData }) => {

  const addRequirement = () => {
    setCourseData({
      ...courseData,
      requirements: [...courseData.requirements, '']
    });
  };

  const updateRequirement = (index, value) => {
    const newReqs = [...courseData.requirements];
    newReqs[index] = value;
    setCourseData({ ...courseData, requirements: newReqs });
  };

  const removeRequirement = (index) => {
    setCourseData({
      ...courseData,
      requirements: courseData.requirements.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start gap-3 mb-6">
        <BookIcon className="w-5 h-5 mt-1" />
        <div>
          <div className="font-semibold text-gray-900 text-lg">Course Requirements</div>
          <div className="text-gray-500 text-sm mt-1">What do students need to know before taking this course?</div>
        </div>
      </div>
      <div className="space-y-3">
        {courseData.requirements.map((req, index) => (
          <div key={index} className="flex gap-3 w-full">
            <InputField
              name={`requirements[${index}]`}
              placeholder={`e.g., Basic understanding of programming`}
              className="w-full"
            />
            {courseData.requirements.length > 1 && (
              <button
                onClick={() => removeRequirement(index)}
                className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addRequirement}
          className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />
          Add Requirement
        </button>
      </div>
    </div>
  )
}

export default RequirementsCard