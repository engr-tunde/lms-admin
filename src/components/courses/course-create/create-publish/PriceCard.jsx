import { DollarIcon } from "../../../globals/Icons";
import InputField from "../../../forms/InputField";
import SelectField from "../../../forms/SelectField";



const PriceCard = ({ courseData, setCourseData }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start gap-3 mb-6">
        <DollarIcon className="w-5 h-5 mt-1" />
        <div>
          <div className="text-lg font-semibold text-gray-900">Pricing</div>
          <div className="text-gray-500 text-sm mt-1">Set the price for your course</div>
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={courseData.isFree}
            onChange={(e) => setCourseData({...courseData, isFree: e.target.checked})}
            className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
          />
          <div>
            <span className="font-medium text-gray-900">Make this course free</span>
            <p className="text-sm text-gray-500">Students can enroll without payment</p>
          </div>
        </label>
      </div>

      {!courseData.isFree && (
        <>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Price
              </label>
              <InputField 
                name="price"
                placeholder="0.00"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <div className="">
                <SelectField
                  name="currency"
                  title="-- Select Currency --"
                  array={currencyOptions}
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <label className="flex items-start gap-3 cursor-pointer mb-3">
              <input
                type="checkbox"
                checked={courseData.hasDiscount}
                onChange={(e) => setCourseData({...courseData, hasDiscount: e.target.checked})}
                className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 mt-0.5"
              />
              <div>
                <span className="font-medium text-gray-900">Offer a promotional discount</span>
                <p className="text-sm text-gray-500">Attract more students with a limited-time offer</p>
              </div>
            </label>

            {courseData.hasDiscount && (
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discounted Price
                </label>
                <InputField
                  name="discountPrice"
                  placeholder="0.00"
                  className="w-full"
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default PriceCard;


const currencyOptions = [
  { value: "USD", title: "US Dollar" },
  { value: "EUR", title: "Euro" },
  { value: "GBP", title: "British Pound" },
  { value: "NGN", title: "Nigerian Naira" },
  { value: "JPY", title: "Japanese Yen" },
];