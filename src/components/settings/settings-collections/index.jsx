import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { collectionsHeader, collectionsData }  from "../../../data/settingsData"
import {useState} from "react"
import CreateCollectionsModal from "./CreateCollectionsModal";
import CollectionsSettingsRowTemplate from "./CollectionsSettingsRowTemplate";

function CollectionsSettingsTable({ collectionData }) {
  const [showCreateCollectionsModal, setShowCreateCollectionsModal] = useState(false);
  console.log("Collections in CollectionsSettingsTable:", collectionData);

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
      data={collectionData}
      />
    </div>
    <CreateCollectionsModal show={showCreateCollectionsModal} onClose={() => setShowCreateCollectionsModal(false)} />
    </>
  );
}


export default CollectionsSettingsTable;