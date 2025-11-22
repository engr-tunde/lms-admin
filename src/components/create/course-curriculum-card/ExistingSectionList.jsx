import { FiPlus, FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import UploadMaterialsModal from "./UploadMaterialsModal";
import { useState } from "react";
import { LuGripVertical } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { RiEdit2Fill } from "react-icons/ri";



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
                <LuGripVertical className="w-5 h-5" />
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
                        className="px-4 py-2 bg-blue-600 text-white rounded-sm text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                        onClick={() => onUpdate(item.id)}
                      >
                        <RiEdit2Fill className="w-4 h-4" />
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button 
                        className="px-4 py-2 bg-red-600 text-white rounded-sm text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                        onClick={() => onDelete(item.id)}
                      >
                        <LuTrash2 className="w-4 h-4" />
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
                        className="px-4 py-2 border border-gray-300 rounded-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                        onClick={() => setAddMaterialButton(!addMaterialButton)}
                      >
                        <FiPlus className="w-4 h-4" />
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