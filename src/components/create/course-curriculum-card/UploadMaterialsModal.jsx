import CustomFormik from "../../forms/CustomFormik"
import VideoUploadField from "../../forms/VideoUploadField";
import { videoMaterialValues } from "../../../utils/initialValues";
import { validateVideoMaterialValues } from "../../../utils/validate";
import { useState } from "react";
import ArticleEditorField from "../../forms/ArticleEditorField"
import CustomModal from "../../globals/Modals";


const UploadMaterialsModal = ({ show }) => {
  const [activeItem, setActiveItem] = useState("addVideo")

  const handleVideoUpload = async () => (console.log("Uploaded"));

  const initialValues = videoMaterialValues();
  const validationSchema = validateVideoMaterialValues();

  if (!show) return null;

  return (
      <div className="flex flex-col mt-3 border border-merseBorder p-4 bg-white">
        <CustomModal
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleVideoUpload}
          submitButtonTitle="Add material"
          title="Add Material"
        >
          <div className="text-sm flex items-center gap-3">
            <button 
              className={`px-2 py-1 ${activeItem === "addVideo" ? "font-semibold  border-b-2 border-black" : ""}`}
              onClick={() => setActiveItem("addVideo")}
            >
              Video
            </button>
            <button 
              className={`px-2 py-1 ${activeItem === "addArticle" ? "font-semibold  border-b-2 border-black" : ""}`}
              onClick={() => setActiveItem("addArticle")}
            >
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