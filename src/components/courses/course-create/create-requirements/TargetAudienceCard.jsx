import FieldArrayInput from "../../../forms/FieldArrayInput";
import InputField from "../../../forms/InputField";
import { UsersIcon, PlusIcon, TrashIcon } from "../../../globals/Icons";



const TargetAudienceCard = () => {

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start gap-3 mb-6">
        <UsersIcon className="w-5 h-5 mt-1" />
        <div>
          <div className="font-semibold text-gray-900 text-lg">Target Audience</div>
          <div className="text-gray-500 text-sm mt-1">Who is this course for?</div>
        </div>
      </div>
  
      <FieldArrayInput
        name="audience"
        placeholder="Enter a audience"
        addButtonTitle="Add Audience"
      />
    </div>
  )
}

export default TargetAudienceCard