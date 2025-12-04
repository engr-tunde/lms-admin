import StatusCheck from "../../globals/StatusCheck"
import { capitalize } from "../../../utils/helpers"
import ProgressBar from "../../globals/ProgressBar";
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react";

function CourseListRowTemplate({ item }) {
  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-6 px-6">
          <button 
            onClick={() => onNavigate(`/courses/${item?.id}`)}
            className="font-semibold text-gray-900 hover:text-purple-700 transition-colors text-left"
          >
            {item?.title}
          </button>
      </td>
      <td className="py-6 px-6">
        <Link
          to={`/courses/create/${item?._id}`}
          className="block w-full hover:opacity-80 transition-opacity text-left"
        >
          <ProgressBar
            label="Course completion"
            value={item?.progress || 45}
            fillColor="#B613F7"
          />
        </Link>
      </td>
      <td className="py-6 px-6">
        <span className="text-sm font-medium text-gray-900">{item?.purchased_by?.length}</span>
      </td>
      <td className="py-6 px-6">
        {item?.status ? (<StatusCheck value={capitalize(item?.status)}/>): null}
      </td>
      <td className="py-6 px-6 text-center">
        <Link 
          to={`/courses/assessment/${item?._id}`}
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Add Assessment
          <ChevronRight className="w-4 h-4" />
        </Link>
      </td>
    </tr>
  );
}

export default CourseListRowTemplate;
