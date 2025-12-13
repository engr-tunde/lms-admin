import { deleteMaterialFile } from "../../../../api";
import { errorNotification, successNotification } from "../../../../utils/helpers";
import { DocumentTextIcon, VideoCamIcon, TrashIcon, PlayIcon } from "../../../globals/Icons";

// Helper to strip HTML tags and get plain text
const stripHtml = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const truncateText = (text, maxLength = 150) => {
  const plainText = stripHtml(text);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + '...';
};

const MaterialFileCard = ({ material, sectionId, mutate }) => {


  const handleDeleteMaterialFile = async () => {
    const response = await deleteMaterialFile({ materialId: sectionId, fileId: material?.file_id })
    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      mutate();
    } else {
      errorNotification(response?.data?.message);
    }
  }

  const isVideo = material?.type === 'video';
  
  return (
    <div className="group relative bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 overflow-hidden">
      {isVideo ? (
        <div className="relative">
          <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-purple-600">
              <VideoCamIcon className="w-14 h-14 mb-2 opacity-80" />
              <span className="text-xs font-medium">
                {(material.material)}
              </span>
            </div>
      
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
              <div className="w-14 h-14 bg-white bg-opacity-95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                <PlayIcon className="w-6 h-6 text-purple-600 ml-1" />
              </div>
            </div>
          </div>
      
          {/* Video Meta */}
          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                    Video
                  </span>
                  <span className="text-xs text-gray-400 truncate">
                    {(material.material)}
                  </span>
                </div>
              </div>
      
              {/* Actions */}
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handleDeleteMaterialFile}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete video"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <DocumentTextIcon className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded self-start">
                  Article
                </div>
              </div>
              <div className="flex gap-1 w-full justify-between">
                {material?.material && (
                  <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
                    {truncateText(material?.material)}
                  </p>
                )}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={handleDeleteMaterialFile}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Delete article"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default MaterialFileCard;