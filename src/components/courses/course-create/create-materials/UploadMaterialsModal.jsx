import VideoUploadField from "../../../forms/VideoUploadField";
import { videoMaterialValues } from "../../../../utils/initialValues";
import { validateVideoMaterialValues } from "../../../../utils/validate";
import { useState } from "react";
import ArticleEditorField from "../../../forms/ArticleEditorField"
import CustomModal from "../../../globals/Modals";
import { VideoCamIcon, DocumentTextIcon } from "../../../globals/Icons";



const UploadMaterialsModal = ({ show }) => {
  const [activeItem, setActiveItem] = useState("addVideo")

  const handleVideoUpload = async () => (console.log("Uploaded"));

  const initialValues = videoMaterialValues();
  const validationSchema = validateVideoMaterialValues();

  if (!show) return null;

  return (
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <CustomModal
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleVideoUpload}
          submitButtonTitle="Add material"
          title="Add Material"
        >
          <div className="flex gap-2 mb-4 border-b border-gray-200">
            <button 
            type="button"
              className={`px-4 py-2 text-sm font-medium flex items-center gap-2 
                ${activeItem === "addVideo" ? 
                  "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveItem("addVideo")}
            >
              <VideoCamIcon className="w-4 h-4" />
              Video
            </button>
            <button 
              type="button"
              className={`px-4 py-2 text-sm font-medium flex items-center gap-2 
                ${activeItem === "addArticle" ? 
                  "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                  onClick={() => setActiveItem("addArticle")}
            >
              <DocumentTextIcon className="w-4 h-4" />
              Article
            </button>
          </div>
          {activeItem === "addVideo" &&
            <VideoUploadField 
              name="video" 
            />
          }
          {activeItem === "addArticle" &&
            <ArticleEditorField 
              name="article" 
            />
          }
        </CustomModal>
      </div>
  )
}

export default UploadMaterialsModal