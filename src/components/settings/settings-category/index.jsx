import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { categoryHeader } from "../../../data/settingsData";
import { useEffect, useState } from "react";
import BulkUploadCategoryModal from "./BulkUploadCategoryModal";
import { fetchCategory, fetchSubcategory } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import CreateUpdateCategoryModal from "./CreateUpdateCategoryModal";
import CategoryRowTemplate from "./CategoryRowTemplate";
import NoDataPage from "../../globals/NoDataPage";
import Pagination from "../../globals/Pagination";

function CategorySettingsTable() {
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const { category, categoryLoading, categoryError, mutate } = fetchCategory();

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (category) {
      setoriginalArr(category);
      setfilteredData(category);
    }
    
  }, [category]);

  const itemsPerPage = category?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (categoryLoading) return <Loader />;
  if (categoryError) return <ErrorWidget error={categoryError} />;
  if (!category?.length) return <NoDataPage message="No categories available" />;

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
            className="text-black px-3 py-2 cursor-pointer border-2"
            onClick={() => setShowBulkUploadModal(true)}
          >
            Bulk upload
          </button>
          <button
            className="text-white bg-black px-3 py-2 cursor-pointer"
            onClick={() => setShowCreateCategoryModal(true)}
          >
            Create category
          </button>
        </div>
        <Table
          columns={categoryHeader}
          renderRow={(item, i) => (
            <CategoryRowTemplate
              key={i}
              item={item}
              i={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              mutate={mutate}
            />
          )}
          data={currentItems} 
        />
      </div>
      <BulkUploadCategoryModal
        show={showBulkUploadModal}
        onClose={() => setShowBulkUploadModal(false)}
        mutate={mutate}
      />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
      <CreateUpdateCategoryModal
        show={showCreateCategoryModal}
        onClose={() => setShowCreateCategoryModal(false)}
        mutate={mutate}
      />
    </>
  );
}

export default CategorySettingsTable;
