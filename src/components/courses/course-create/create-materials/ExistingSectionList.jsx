import { EditIcon, TrashIcon, GripIcon, PlusIcon } from "../../../globals/Icons"
import UploadMaterialsModal from "./UploadMaterialsModal";
import { useState } from "react";


const ExistingSectionList = ({ sections, onDelete, onUpdate, onAddMaterials }) => {
  const [addMaterialButton, setAddMaterialButton] = useState(false)

  if (sections.length === 0) {
    return (
      <div className="text-gray-500 text-sm italic">
        No sections added yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {sections.map((item, index) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="px-6 py-10">
            <div className="flex items-start gap-4">
              <button className="mt-1 text-gray-400 hover:text-gray-600 cursor-move">
                <GripIcon className="w-5 h-5" />
              </button>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-merseLightText text-sm w-[90%]">{item.objective}</p>
                  </div>
                  <div className="flex gap-2">
                    {onUpdate && (
                      <button 
                        className="edit-button"
                        onClick={() => onUpdate(item.id)}
                      >
                        <EditIcon className="w-4 h-4" />

                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button 
                        className="delete-button"
                        onClick={() => onDelete(item.id)}
                      >
                        <TrashIcon className="w-4 h-4" />
                        Delete
                      </button>
                    )}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{item.materials} materials</span>
                    {onAddMaterials && (
                      <button 
                        className="px-4 py-2 font-medium text-purple-600 hover:text-purple-800 transition-colors flex items-center "
                        onClick={() => setAddMaterialButton(!addMaterialButton)}
                      >
                        <PlusIcon className="w-4 h-4" />
                        Add Materials
                      </button>)}
                  </div>
                </div>
                { addMaterialButton && (
                  <UploadMaterialsModal
                    show={addMaterialButton}
                    onClose={() => setAddMaterialButton(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ExistingSectionList