import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { collectionsHeader, collectionsData }  from "../../../data/settingsData"
import {useEffect, useState} from "react"
import CreateCollectionsModal from "./CreateCollectionsModal";
import CollectionsSettingsRowTemplate from "./CollectionsSettingsRowTemplate";
import { fetchCollection } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";

function CollectionsSettingsTable() {
  const [showCreateCollectionsModal, setShowCreateCollectionsModal] = useState(false);
  const { collection, collectionLoading, collectionError } = fetchCollection();
  const collectionData = collection?.slice(0, 10);
  console.log("Collections in CollectionsSettingsTable:", collectionData);

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (collectionData) {
      setoriginalArr(collectionData);
      setfilteredData(collectionData);
    }
  }, [collectionData, filteredData, originalArr]);

  if (collectionLoading) return <Loader />
  if (collectionError) return <ErrorWidget error={collectionError} />
  if (!collectionData?.length) return <div>No Collection found</div>;

  return (
    <>
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch 
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
            />
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
      renderRow={(item, i) => CollectionsSettingsRowTemplate(item, i, openIndex, setOpenIndex)}
      data={filteredData}
      />
    </div>
    <CreateCollectionsModal show={showCreateCollectionsModal} onClose={() => setShowCreateCollectionsModal(false)} />
    </>
  );
}


export default CollectionsSettingsTable;