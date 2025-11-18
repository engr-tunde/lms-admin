import { FiPlus, FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";




const ExistingSectionList = ({ sections, onDelete, onUpdate }) => {


  const deleteIcon = () => (<FiTrash size={15} />);  
  const editIcon = () => (<FiEdit size={15} />);
  const addIcon = () => (<FiPlus size={15} />);

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
          className="border border-gray-300 rounded-md p-4 bg-white shadow-sm"
        >
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">
                {index + 1}. {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.objective}</p>
              
            </div>
            <div className="flex w-full justify-between items-end mt-4">
              <div className="">
                <button className="border-merseBorder border-2 px-3 py-1 flex items-center gap-1 text-sm">
                  {addIcon()}
                  Add Contents
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  className="text-xs px-3 py-1 bg-blue-600 text-white flex items-center gap-1"
                  onClick={() => onUpdate(item.id)}
                >
                  {editIcon()}
                  Edit
                </button   >
      
                <button
                  className="text-xs px-3 py-1 bg-red-600 text-white flex items-center gap-1"
                  onClick={() => onDelete(item.id)}
                >
                  {deleteIcon()}
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ExistingSectionList