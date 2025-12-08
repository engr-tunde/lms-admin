import InputField from "../../../forms/InputField";
import { ClockIcon, AwardIcon } from "../../../globals/Icons";
import CheckboxField from "../../../forms/CheckboxField";

const OtherDetailsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Course Settings</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <ClockIcon className="w-4 h-4 inline mr-2" />
            Estimated Duration
          </label>
          <InputField
            name={`duration`}
            placeholder={`e.g., 8 weeks, 20 hours`}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <AwardIcon className="w-4 h-4 inline mr-2" />
            Certificate
          </label>
          <div className="flex items-center gap-4 h-[52px]">
            <CheckboxField 
              name="certificate" 
              label="Provide certificate upon completion" 
            />
          </div>
        </div>
      </div>
  </div>
  )
}

export default OtherDetailsCard;
