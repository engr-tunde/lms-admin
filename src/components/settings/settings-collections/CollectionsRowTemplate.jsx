import DeleteCollectionsModal from "./DeleteCollectionsModal";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react"
import { capitalize, compactDateFormatter, useToggleOpen } from "../../../utils/helpers";
import CreateUpdateCollectionsModal from "./CreateUpdateCollectionsModal";

function CollectionsRowTemplate({ item, i, openIndex, setOpenIndex, mutate }) {
  const [showDeleteCollectionsModal, setShowDeleteCollectionsModal] = useState(false);
  const [showUpdateCollectionsModal, setShowUpdateCollectionsModal] = useState(false);
  const { isOpen, toggle, close, ref } = useToggleOpen(openIndex, setOpenIndex, i);

  return (
    <>
    <tr className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{capitalize(item.name)}</td>
      <td className="py-4 text-sm">{compactDateFormatter(item.created_at || item.createdAt) || null}</td>
      <td className="py-4 text-sm">
        <div 
          className="relative cursor-pointer"
          ref={ref}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {isOpen && (
            <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col top-6 right-0 bg-white shadow-xl border-[1px]">
              <button
                className="text-sm text-left px-5 py-2"
                onClick={() => {
                  setShowUpdateCollectionsModal(true); 
                  close();
                }}
              >
                Edit
              </button>
              <button
                className="text-sm text-left px-5 py-2"
                onClick={() => {setShowDeleteCollectionsModal(true); close()}}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
    <CreateUpdateCollectionsModal 
      show={showUpdateCollectionsModal}
      onClose={() => setShowUpdateCollectionsModal(false)}
      mutate={mutate}
      isEdit={true}
      updateData={item}
    />
    <DeleteCollectionsModal 
      show={showDeleteCollectionsModal} 
      onClose={() => setShowDeleteCollectionsModal(false)} 
      collectionToDelete={item.name} 
      collectionToDeleteId={item.id}
      mutate={mutate} 
    />
    </>
  );
}


export default CollectionsRowTemplate;



