import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { collectionsHeader } from "../../../data/settingsData";
import { useEffect, useState } from "react";
import { fetchCollection } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import CollectionsRowTemplate from "./CollectionsRowTemplate";
import CreateUpdateCollectionsModal from "./CreateUpdateCollectionsModal";
import NoDataPage from "../../globals/NoDataPage";
import Pagination from "../../globals/Pagination";

function CollectionsSettingsTable() {
  const [showCreateCollectionsModal, setShowCreateCollectionsModal] =useState(false);
  const { collection, collectionLoading, collectionError, mutate } = fetchCollection();
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    if (collection) {
      setoriginalArr(collection);
      setfilteredData(collection);
    }
  }, [collection]);

  const itemsPerPage = collection?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (collectionLoading) return <Loader />;
  if (collectionError) return <ErrorWidget error={collectionError} />;
  if (!collection?.length) return <NoDataPage message="No collections available yet" />;

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-end gap-4">
          <div className="flex items-center cursor-pointer">
            <TableSearch
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              searchable={["name"]}
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
              key={i}
              i={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              mutate={mutate}
            />
          )}
          data={currentItems}
        />
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
      <CreateUpdateCollectionsModal
        show={showCreateCollectionsModal}
        onClose={() => setShowCreateCollectionsModal(false)}
        mutate={mutate}
      />
    </>
  );
}

export default CollectionsSettingsTable;
