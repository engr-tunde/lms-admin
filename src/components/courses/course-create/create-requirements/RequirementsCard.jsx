import { BookIcon, PlusIcon, TrashIcon } from "../../../globals/Icons";
import FieldArrayInput from "../../../forms/FieldArrayInput";



const RequirementsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start gap-3 mb-6">
        <BookIcon className="w-5 h-5 mt-1" />
        <div>
          <div className="font-semibold text-gray-900 text-lg">Course Requirements</div>
          <div className="text-gray-500 text-sm mt-1">What do students need to know before taking this course?</div>
        </div>
      </div>
      <FieldArrayInput
        name="requirements"
        placeholder="Enter a requirement"
        addButtonTitle="Add Requirement"
      />
    </div>
  )
}

export default RequirementsCard