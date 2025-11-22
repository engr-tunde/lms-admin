import { LuUsers, LuPlus, LuTrash2 } from "react-icons/lu";



const TargetAudienceCard = ({ courseData, setCourseData }) => {

  const addTargetAudience = () => {
    setCourseData({
      ...courseData,
      targetAudience: [...courseData.targetAudience, '']
    });
  };

  const updateTargetAudience = (index, value) => {
    const newAudience = [...courseData.targetAudience];
    newAudience[index] = value;
    setCourseData({ ...courseData, targetAudience: newAudience });
  };

  const removeTargetAudience = (index) => {
    setCourseData({
      ...courseData,
      targetAudience: courseData.targetAudience.filter((_, i) => i !== index)
    });
  };



  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start gap-3 mb-6">
        <LuUsers className="w-5 h-5 mt-1" />
        <div>
          <div className="font-semibold text-gray-900 text-lg">Target Audience</div>
          <div className="text-gray-500 text-sm mt-1">Who is this course for?</div>
        </div>
      </div>
  
      <div className="space-y-3">
        {courseData.targetAudience.map((audience, index) => (
          <div key={index} className="flex gap-3">
            <input
              type="text"
              value={audience}
              onChange={(e) => updateTargetAudience(index, e.target.value)}
              placeholder="e.g., Aspiring data scientists"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            {courseData.targetAudience.length > 1 && (
              <button
                onClick={() => removeTargetAudience(index)}
                className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                <LuTrash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addTargetAudience}
          className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
        >
          <LuPlus className="w-4 h-4" />
          Add Audience
        </button>
      </div>
    </div>
  )
}

export default TargetAudienceCard