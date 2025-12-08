import StatusCheck from "../../globals/StatusCheck"
import { capitalize } from "../../../utils/helpers"
import ProgressBar from "../../globals/ProgressBar";
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


function CourseListRowTemplate({ item }) {

  const navigate = useNavigate();

  const ProceedTo = (progress_status) => {
    if (progress_status === "overview") return "Add Materials";
    if (progress_status === "materials") return "Add Requirements";
    if (progress_status === "requirements") return "Set Pricing";
    if (progress_status === "pricing") return "Publish Course";
    return "";
  }
  const NextStep = (progress_status) => {
    if (progress_status === "overview") return "materials";
    if (progress_status === "materials") return "requirements";
    if (progress_status === "requirements") return "pricing";
    if (progress_status === "pricing") return "publish";
    if (progress_status === "completed") return "publish";
    return "";
  }



  const Value = (progress_status) => {
    if (progress_status === "overview") return 20;
    if (progress_status === "materials") return 40;
    if (progress_status === "requirements") return 60;
    if (progress_status === "pricing") return 80;
    if (progress_status === "completed") return 100;
    return 0;
  }

  const handleNavigate = () => {
    const state = {
      course: item,
      nextLabel: NextStep(item.progress_status),
      progress_status: item.progress_status,
      value: Value(item.progress_status)
    };  
    navigate(`/courses/create/${item._id}`, { state });
  };

  return (
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-6 px-6">
          <button 
            onClick={() => console.log("Clicked")}
            className="font-semibold text-gray-900 hover:text-purple-700 transition-colors text-left"
          >
            {item?.title}
          </button>
      </td>
      <td className="py-6 px-6">
        <button
          onClick={handleNavigate}
          className="block w-full hover:opacity-80 transition-opacity text-left"
        >
          <ProgressBar
            label={ProceedTo(item?.progress_status)}
            value={Value(item?.progress_status)}
            fillColor="#9333EA"
            className="w-[120px]"
            showValue
          />
        </button>

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
