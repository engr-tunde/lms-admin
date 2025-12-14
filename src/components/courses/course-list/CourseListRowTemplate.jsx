import StatusCheck from "../../globals/StatusCheck"
import { capitalize } from "../../../utils/helpers"
import ProgressBar from "../../globals/ProgressBar";
import { Link } from "react-router-dom"
import { ChevronRight, Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { EditIcon, TrashIcon } from "../../globals/Icons";
import { useState } from "react";
import DeleteCourseModal from "./DeleteCourseModal";


function CourseListRowTemplate({ item, mutate }) {
  const [showDeleteModal, setShowDeleteModal] = useState();

  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/courses/create/${item._id}`);

  const ProceedTo = (progress_status) => {
    if (progress_status === "overview") return "Add Materials";
    if (progress_status === "materials") return "Add Requirements";
    if (progress_status === "requirements") return "Set Pricing";
    if (progress_status === "pricing") return "Publish Course";
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

  return (
    <>
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
      <td className="py-6 px-6">
        {item?.total_price && (
          <span className="flex items-baseline gap-0.5">
            <span className="font-semibold text-lg">{item.total_price}</span>
            <span className=" text-xs">{item.currency}</span>
          </span>
        )}
      </td>
      {/* <td className="text-center">
        <Link 
          to={`/courses/assessment/${item?._id}`}
          className="inline-flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Add Assessment
        </Link>
      </td> */}
      <td className="py-6 px-6">
        <div className="flex items-center justify-end gap-2">
          <button 
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={handleNavigate}
          >
            <EditIcon className="w-4 h-4" />
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            onClick={() => setShowDeleteModal(true)}
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
    {showDeleteModal && (
      <DeleteCourseModal
        setShowDeleteModal={setShowDeleteModal}
        courseData={item}
        mutate={mutate}
      />
    )}
    </>
  );
}

export default CourseListRowTemplate;
