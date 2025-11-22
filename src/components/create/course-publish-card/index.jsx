import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";



const CoursePublishCard = () => {

  const [courseData, setCourseData] = useState({
    price: '',
    currency: 'USD',
    isFree: false,
    hasDiscount: false,
    discountPrice: '',
    requirements: [''],
    targetAudience: [''],
    duration: '',
    certificateEnabled: true
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="flex items-start gap-3 mb-6">
          <FiDollarSign className="w-5 h-5 mt-1" />
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
                <input
                  type="number"
                  value={courseData.price}
                  onChange={(e) => setCourseData({...courseData, price: e.target.value})}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <div className="relative">
                  <select 
                    value={courseData.currency}
                    onChange={(e) => setCourseData({...courseData, currency: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>NGN</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Discount Option */}
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
                  <input
                    type="number"
                    value={courseData.discountPrice}
                    onChange={(e) => setCourseData({...courseData, discountPrice: e.target.value})}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CoursePublishCard;
