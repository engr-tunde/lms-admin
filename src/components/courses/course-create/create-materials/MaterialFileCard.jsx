import { deleteMaterialFile } from "../../../../api";
import { errorNotification, successNotification } from "../../../../utils/helpers";
import { DocumentTextIcon, TrashIcon } from "../../../globals/Icons";

// Helper to strip HTML tags
const stripHtml = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const truncateText = (text, maxLength = 160) => {
  const plainText = stripHtml(text);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + "...";
};

const MaterialFileCard = ({ material, sectionId, mutate, setActiveTab }) => {
  const isVideo = material?.type === "video";

  const handleDeleteMaterialFile = async () => {
    const response = await deleteMaterialFile({
      materialId: sectionId,
      fileId: material?.file_id,
    });

    if (response.status.toString().includes("20")) {
      successNotification(response.data?.message);
      mutate();
      setActiveTab("materials");
    } else {
      errorNotification(response?.data?.message);
    }
  };

  return (
    <div className="group relative flex-shrink-0 w-72 h-56 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all overflow-hidden">
      {isVideo ? (
        <div className="h-40 bg-black overflow-hidden">
          <video
            src={material.material}
            controls
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-40 p-4 bg-white overflow-hidden">
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-6">
            {truncateText(material?.material)}
          </p>
        </div>
      )}
      <div className="p-4 flex items-center justify-between">
        <span
          className={`px-2 py-0.5 text-xs font-medium rounded ${
            isVideo
              ? "bg-purple-100 text-purple-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {isVideo ? "Video" : "Article"}
        </span>

        <button
          onClick={handleDeleteMaterialFile}
          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition opacity-0 group-hover:opacity-100"
          title={`Delete ${isVideo ? "video" : "article"}`}
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default MaterialFileCard;
