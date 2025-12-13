import { Edit2 } from "lucide-react"
import { DollarIcon } from "../../../globals/Icons"

const PricePreview = ( { course, setActiveTab }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <DollarIcon className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Pricing</h3>
          </div>
          {course?.price === 0 ? (
            <div>
              <p className="text-3xl font-bold text-green-600">Free</p>
              <p className="text-sm text-gray-500 mt-1">Open to all students</p>
            </div>
          ) : (
            <div >
              <div className="text-3xl font-bold text-gray-900 flex gap-1 items-baseline">
                <span className="text-base text-gray-500 mt-1 font-semibold">{course?.currency}</span>
                {course?.price}
              </div>
              {course?.discount_percent !== 0 && (
                <div className="mt-2">
                  <span className="text-sm text-gray-500 line-through">${course?.discount_percent}%</span>
                  <span className="ml-2 text-sm font-medium text-green-600">Limited offer</span>
                </div>
              )}
            </div>  
          )}
        </div>
        <button 
          className="p-2 text-purple-600 hover:text-purple-700"
          onClick={() => setActiveTab("pricing")}
        >
          <Edit2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default PricePreview