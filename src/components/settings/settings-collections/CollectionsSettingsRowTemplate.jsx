import DeleteCollectionsModal from "./DeleteCollectionsModal";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react"
import { capitalize, compactDateFormatter } from "../../../utils/helpers";

function CollectionsSettingsRowTemplate(item, i) {
  const [actionOpen, setActionOpen] = useState(null)
  const [showDeleteCollectionsModal, setShowDeleteCollectionsModal] = useState(false);
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  }

  return (
    <>
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{capitalize(item.name)}</td>
      <td className="py-4 text-sm">{compactDateFormatter(item.created_at || item.createdAt) || null}</td>
      <td className="py-4 text-sm">
        <div className="relative cursor-pointer">
          <button
            onClick={() => handleActionClick(i)}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {actionOpen === i && (
            <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col top-6 left-0 bg-white shadow-xl">
              <button
                className="text-sm text-left px-5 py-2"
              >
                Edit
              </button>
              <button
                className="text-sm text-left px-5 py-2"
                onClick={() => setShowDeleteCollectionsModal(true)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
    <DeleteCollectionsModal 
      show={showDeleteCollectionsModal} 
      onClose={() => setShowDeleteCollectionsModal(false)} 
      collectionToDelete={item.name} 
      collectionToDeleteId={item.id} 
      />
    </>
  );
}


export default CollectionsSettingsRowTemplate;



