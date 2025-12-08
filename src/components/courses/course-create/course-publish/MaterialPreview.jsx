import { Edit2 } from "lucide-react";
import { fetchCourseMaterial } from "../../../../api";
import { useEffect, useState } from "react";

const MaterialPreview = ({ course }) => {
  const [material, setMaterial] = useState()
  const { courseMaterial, mutate } = fetchCourseMaterial(course?._id);
  console.log("courseMaterial in MaterialPreview", courseMaterial);

  useEffect(() => {
    if (courseMaterial?.data?.length) {
      setMaterial(courseMaterial?.data);
    }
  }, [courseMaterial]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Course Materials</h2>
          <p className="text-gray-500 text-sm mt-1">{material?.length} sections</p>
        </div>
        <button className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2">
          <Edit2 className="w-4 h-4" />
          Edit
        </button>
      </div>
      <div className="space-y-4">
        {material?.map((m, i) => (
          <div key={m?._id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {i + 1}. {m?.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{m?.objective}</p>
            <p className="text-xs text-gray-500">3 materials added</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MaterialPreview;