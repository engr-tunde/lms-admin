import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { collectionsHeader } from "../../../data/settingsData";
import { useEffect, useState } from "react";
import { fetchCollection } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import CollectionsRowTemplate from "./CollectionsRowTemplate";
import CreateUpdateCollectionsModal from "./CreateUpdateCollectionsModal";

function CollectionsSettingsTable() {
  const [showCreateCollectionsModal, setShowCreateCollectionsModal] =
    useState(false);
  const [collectionData, setcollectionData] = useState();
  const { collection, collectionLoading, collectionError, mutate } =
    fetchCollection();

  useEffect(() => {
    if (collection) {
      const colData = collection?.slice(0, 10);
      setcollectionData(colData);
    }
  }, [collection]);

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (collectionData) {
      setoriginalArr(collectionData);
      setfilteredData(collectionData);
    }
  }, [collectionData, filteredData, originalArr]);

  if (collectionLoading) return <Loader />;
  if (collectionError) return <ErrorWidget error={collectionError} />;
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
          renderRow={(item, i) => (
            <CollectionsRowTemplate
              item={item}
              i={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              mutate={mutate}
            />
          )}
          data={filteredData}
        />
      </div>
      <CreateUpdateCollectionsModal
        show={showCreateCollectionsModal}
        onClose={() => setShowCreateCollectionsModal(false)}
        mutate={mutate}
      />
    </>
  );
}

export default CollectionsSettingsTable;
