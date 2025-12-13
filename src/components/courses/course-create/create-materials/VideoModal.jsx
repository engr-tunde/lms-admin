import VideoUploadField from "../../../forms/VideoUploadField";
import { videoValues } from "../../../../utils/initialValues";
import { validateVideoValues } from "../../../../utils/validate";
import CustomModal from "../../../globals/Modals";
import { VideoCamIcon } from "../../../globals/Icons";
import SubmitButton from "../../../forms/SubmitButton";
import { X } from "lucide-react";
import { addMaterialFile } from "../../../../api";
import { errorNotification, successNotification } from "../../../../utils/helpers";


const VideoModal = ({ show, onClose, sectionId, mutate }) => {
  const initialValues = videoValues();
  const validationSchema = validateVideoValues();

  if (!show) return null;

  const handleMaterialSubmit = async (values) => {
    const formData = new FormData();
  
    formData.append("type", "video");
    formData.append("material", values.material);

    console.log("material value:", values.material);
    console.log("is File:", values.material instanceof File);
  
    const response = await addMaterialFile(formData, sectionId);
  
    if (response.status.toString().startsWith("20")) {
      successNotification(response.data?.message);
      mutate();
    } else {
      errorNotification(
        response?.data?.message || "Failed to add material"
      );
    }
  };

  return ( 
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto p-6">
        <div className="flex w-full justify-end items-start">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <CustomModal
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleMaterialSubmit}
          title=""
          className="flex flex-col gap-3"
        >
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex gap-2 mb-4 border-b border-gray-200">
              <button 
                type="button"
                className={`px-4 py-2 text-sm font-medium flex items-center gap-2 text-purple-600 border-b-2 border-purple-600`}
              >
                <VideoCamIcon className="w-4 h-4" />
                Video
              </button>
            </div>
            <VideoUploadField name="material" />
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <SubmitButton
              title="Upload Video"
              className={`px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors`}
            />
          </div>
        </CustomModal>
      </div>
    </div>
  )
}

export default VideoModal
