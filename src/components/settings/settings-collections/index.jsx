import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { collectionsHeader, collectionsData }  from "../../../data/settingsData"
import { IoEllipsisVertical } from "react-icons/io5";
import {useState} from "react"
import CreateCollectionsModal from "./CreateCollectionsModal";
import DeleteCollectionsModal from "./DeleteCollectionsModal";

function CollectionsSettingsTable() {
  const [showCreateCollectionsModal, setShowCreateCollectionsModal] = useState(false);

  return (
    <>
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
        <button 
          className="text-white bg-black px-3 py-2 cursor-pointer"
          onClick={() => setShowCreateCollectionsModal(true)}
        >
          Create Collection
        </button>
      </div>
      <Table 
      columns={collectionsHeader}
      renderRow={CollectionsSettingsRowTemplate}
      data={collectionsData}
      />
    </div>
    <CreateCollectionsModal show={showCreateCollectionsModal} onClose={() => setShowCreateCollectionsModal(false)} />
    </>
  );
}


function CollectionsSettingsRowTemplate(item, i) {
  const [actionOpen, setActionOpen] = useState(null)
  const [showDeleteCollectionsModal, setShowDeleteCollectionsModal] = useState(false);
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  }

  return (
    <>
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{item.collectionsName}</td>
      <td className="py-4 text-sm">{item.dateCreated}</td>
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
    <DeleteCollectionsModal show={showDeleteCollectionsModal} onClose={() => setShowDeleteCollectionsModal(false)} collectionsToDelete={item.collectionsName} />
    </>
  );
}


export default CollectionsSettingsTable;



