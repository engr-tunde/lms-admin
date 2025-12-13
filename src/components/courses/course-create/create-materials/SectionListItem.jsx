import { DocumentTextIcon, GripIcon, PlusIcon, VideoCamIcon } from "../../../globals/Icons"
import { useState } from "react";
import DeleteMaterialModal from "./DeleteMaterialModal";
import { errorNotification } from "../../../../utils/helpers";
import VideoModal from "./VideoModal";
import ArticleModal from "./ArticleModal";
import MaterialFileCard from "./MaterialFileCard";
import { X } from "lucide-react";

const SectionListItem = ({ section, index, mutate, disableRemoval }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);

  const handleDeleteClick = () => {
    if (disableRemoval()) {
      errorNotification(
        "At least one section is required. Add another section before deleting this one."
      );
    } else {
      setShowDeleteModal(true);
    }
  }

  return (
    <>
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-6">
        <div className="flex items-start gap-4">
          <button className="mt-1 text-gray-400 hover:text-gray-600 cursor-move">
            <GripIcon className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}. {section?.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {section?.objective}
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={handleDeleteClick}
                  className="delete-button"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-sm text-gray-500">
                    {section.materials?.length || 0} Materials
                  </span>
                  {section.materials?.length > 0 && (
                    <button
                      onClick={() => setShowMaterials(!showMaterials)}
                      className="text-purple-600 text-xs hover:text-purple-800 transition-colors flex items-center gap-2"
                    >
                      {showMaterials ? "Hide Files" : "Show Files"}
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowArticleModal(true)}
                    className="px-4 py-2 font-medium text-purple-600 text-sm hover:text-purple-800 transition-colors flex items-center gap-2"
                  >
                    <DocumentTextIcon className="w-4 h-4" />
                    Add Text
                  </button>
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="px-4 py-2 font-medium text-purple-600 text-sm hover:text-purple-800 transition-colors flex items-center gap-2"
                  >
                    <VideoCamIcon className="w-4 h-4" />
                    Add Video
                  </button>
                </div>
              </div>
            </div>
            {section.materials?.length > 0 && showMaterials && (
            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.materials?.map((material, index) => (
                  <MaterialFileCard
                    key={material.file_id || index}
                    material={material}
                    sectionId={section?._id}
                    mutate={mutate}
                  />
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <ArticleModal
      show={showArticleModal}
      onClose={() => setShowArticleModal(false)}
      sectionId={section?._id}
      mutate={mutate}
    />
    <VideoModal
      show={showVideoModal}
      onClose={() => setShowVideoModal(false)}
      sectionId={section?._id}
      mutate={mutate}
    />
    {showDeleteModal && (
      <DeleteMaterialModal 
        setShowDeleteModal={setShowDeleteModal}
        section={section}
        mutate={mutate}
      />
    )}
    </>
  );
};



export default SectionListItem;