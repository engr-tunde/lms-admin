import { errorNotification, successNotification } from "../../../utils/helpers";
import { X } from "lucide-react";
import { deleteCourse } from "../../../api";
import { useNavigate } from "react-router-dom";


const DeleteCourseModal = ({ setShowDeleteModal, courseData, mutate}) => {

  const handleDelete = async () => {
    const response = await deleteCourse(courseData?._id);
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      mutate();
      setShowDeleteModal(false);
    } else {
      errorNotification(response?.data?.message);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 bg-opacity-40 w-full">
      <div className="bg-white p-6 shadow-lg w-1/2 flex flex-col gap-3 rounded-lg">
        <div>
          <button className="ml-auto block">
            <X size={20} onClick={() => setShowDeleteModal(false)} className="" />
          </button>
        </div>
        <div className="flex justify-between gap-4 h-full">
          <div className="w-full h-full">
            {`Are you sure you want to delete "${courseData?.title}"? You will lose all the attached materials too. This action cannot be undone.`}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => setShowDeleteModal(false)}
            className="edit-button"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {handleDelete(); navigate("/courses")}}
            className="delete-button"
          >
            Delete
          </button>
          </div>
      </div>
    </div>
  )
}

export default DeleteCourseModal