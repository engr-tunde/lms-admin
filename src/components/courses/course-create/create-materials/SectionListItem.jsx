import { useParams } from "react-router-dom";
import { GripIcon, PlusIcon } from "../../../globals/Icons"
import MaterialUploadModal from "./UploadMaterialsModal";
import { useState } from "react";

const SectionListItem = ({ section, index, onDelete, onEdit, mutate }) => {
  const [showMaterialModal, setShowMaterialModal] = useState(false);

  const { id } = useParams()

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
                  onClick={() => onEdit(section?._id)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(section?._id)}
                  className="delete-button"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {section.materials || 0} materials
                </span>
                <button
                  onClick={() => setShowMaterialModal(true)}
                  className="px-4 py-2 font-medium text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-2"
                >
                  <PlusIcon className="w-4 h-4" />
                  Add Materials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MaterialUploadModal
      show={showMaterialModal}
      onClose={() => setShowMaterialModal(false)}
      sectionId={section?._id}
      mutate={mutate}
    />
    </>
  );
};



export default SectionListItem;