import VideoUploadField from "../../../forms/VideoUploadField";
import { videoMaterialValues } from "../../../../utils/initialValues";
import { validateVideoMaterialValues } from "../../../../utils/validate";
import { useState } from "react";
import ArticleEditorField from "../../../forms/ArticleEditorField"
import CustomModal from "../../../globals/Modals";
import { VideoCamIcon, DocumentTextIcon, UploadIcon } from "../../../globals/Icons";
import SubmitButton from "../../../forms/SubmitButton";
import { X } from "lucide-react";



const MaterialUploadModal = ({ show, onClose, onSubmit, sectionId }) => {
  const [activeItem, setActiveItem] = useState("video");

  // const handleSubmit = () => {
  //   if (activeItem === "video" && videoFile) {
  //     onSubmit(sectionId, { type: "video", file: videoFile });
  //   } else if (activeItem === "article" && articleContent) {
  //     onSubmit(sectionId, { type: "article", content: articleContent });
  //   }
  //   onClose();
  // };

  const handleVideoUpload = async () => (console.log("Uploaded"));

  const initialValues = videoMaterialValues();
  const validationSchema = validateVideoMaterialValues();

  if (!show) return null;

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
          onSubmit={handleVideoUpload}
          title="Add Material"
          className="flex flex-col gap-3"
        >
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex gap-2 mb-4 border-b border-gray-200">
              <button 
              type="button"
                className={`px-4 py-2 text-sm font-medium flex items-center gap-2 
                  ${activeItem === "video" ? 
                    "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveItem("video")}
              >
                <VideoCamIcon className="w-4 h-4" />
                Video
              </button>
              <button 
                type="button"
                className={`px-4 py-2 text-sm font-medium flex items-center gap-2 
                  ${activeItem === "article" ? 
                    "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveItem("article")}
              >
                <DocumentTextIcon className="w-4 h-4" />
                Article
              </button>
            </div>
            {activeItem === "video" &&
              <VideoUploadField 
                name="video" 
              />
            }
            {activeItem === "article" &&
              <ArticleEditorField 
                name="article" 
              />
            }
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              // onClick={handleSubmit}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Upload Material
            </button>
          </div>
        </CustomModal>
      </div>
    </div>
  )
}

export default MaterialUploadModal






// const MaterialUploadModal = ({ show, onClose, onSubmit, sectionId }) => {
//   const [activeTab, setActiveTab] = useState("video");
//   const [videoFile, setVideoFile] = useState(null);
//   const [articleContent, setArticleContent] = useState("");

//   if (!show) return null;

//   const handleSubmit = () => {
//     if (activeTab === "video" && videoFile) {
//       onSubmit(sectionId, { type: "video", file: videoFile });
//     } else if (activeTab === "article" && articleContent) {
//       onSubmit(sectionId, { type: "article", content: articleContent });
//     }
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
//         <button
//           onClick={onClose}
//           className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
//         >
//           ×
//         </button>

//         <div className="p-6">
//           <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
//             <div className="flex gap-2 mb-6 border-b border-gray-200">
//               <button
//                 type="button"
//                 className={`px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors
//                   ${activeTab === "video"
//                     ? "text-purple-600 border-b-2 border-purple-600"
//                     : "text-gray-500 hover:text-gray-700"
//                   }`}
//                 onClick={() => setActiveTab("video")}
//               >
//                 <VideoCamIcon className="w-4 h-4" />
//                 Video
//               </button>
//               <button
//                 type="button"
//                 className={`px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors
//                   ${activeTab === "article"
//                     ? "text-purple-600 border-b-2 border-purple-600"
//                     : "text-gray-500 hover:text-gray-700"
//                   }`}
//                 onClick={() => setActiveTab("article")}
//               >
//                 <DocumentTextIcon className="w-4 h-4" />
//                 Article
//               </button>
//             </div>

//             {activeTab === "video" && (
//               <div className="space-y-4">
//                 <label className="block">
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
//                     <UploadIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
//                     <p className="text-sm text-gray-600 mb-1">
//                       {videoFile ? videoFile.name : "Click to upload or drag and drop"}
//                     </p>
//                     <p className="text-xs text-gray-500">MP4, MOV, AVI up to 500MB</p>
//                     <input
//                       type="file"
//                       accept="video/*"
//                       className="hidden"
//                       onChange={(e) => setVideoFile(e.target.files[0])}
//                     />
//                   </div>
//                 </label>
//               </div>
//             )}

//             {activeTab === "article" && (
//               <div className="space-y-4">
//                 <textarea
//                   className="w-full min-h-[300px] p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-y"
//                   placeholder="Write your article content here..."
//                   value={articleContent}
//                   onChange={(e) => setArticleContent(e.target.value)}
//                 />
//               </div>
//             )}
//           </div>

//           <div className="mt-6 flex justify-end gap-3">
//             <button
//               onClick={onClose}
//               className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
//             >
//               Upload Material
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
