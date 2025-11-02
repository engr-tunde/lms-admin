import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { brandHeader } from "../../../data/settingsData";
import { useEffect, useState } from "react";
import { fetchBrandType } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import CreateUpdateBrandTypeModal from "./CreateUpdateBrandTypeModal";
import BrandTypeRowTemplate from "./BrandTypeRowTemplate";
import NoDataPage from "../../globals/NoDataPage";
import Pagination from "../../globals/Pagination";

function BrandTypeSettingsTable() {
  const [showCreateBrandModal, setShowCreateBrandModal] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { brandtype, brandtypeLoading, brandtypeError, mutate } = fetchBrandType();

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();

  useEffect(() => {
    if (brandtype?.length) {
      setoriginalArr(brandtype);
      setfilteredData(brandtype);
    }
  }, [brandtype]);

  const itemsPerPage = brandtype?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (brandtypeLoading) return <Loader />;
  if (brandtypeError) return <ErrorWidget error={brandtypeError} />;
  if (!brandtype.length)
  return <NoDataPage message="No brand types available" />;

  return (
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
          onClick={() => setShowCreateBrandModal(true)}
        >
          Create brand type
        </button>
      </div>
      <Table
        columns={brandHeader}
        renderRow={(item, i) => (
          <BrandTypeRowTemplate
            key={i}
            i={i}
            item={item}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            mutate={mutate}
          />
        )}
        data={currentItems}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <CreateUpdateBrandTypeModal
        show={showCreateBrandModal}
        onClose={() => setShowCreateBrandModal(false)}
        mutate={mutate}
      />
    </div>
  );
}

export default BrandTypeSettingsTable;
