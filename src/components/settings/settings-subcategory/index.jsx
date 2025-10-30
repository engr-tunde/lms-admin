import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { subcategoryHeader } from "../../../data/settingsData";
import { useEffect, useState } from "react";
import CreateSubcategoryModal from "./CreateSubcategoryModal";
import BulkUploadSubcategoryModal from "./BulkUploadSubcategoryModal";
import SubcategoryRowTemplate from "./SubcategoryRowTemplate";
import { fetchSubcategory, fetchCategory } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import NoDataPage from "../../globals/NoDataPage";
import Pagination from "../../globals/Pagination";

function SubcategorySettingsTable() {
  const [showCreateSubcategoryModal, setShowCreateSubcategoryModal] =useState(false);
  const [showBulkUploadSubcategoryModal, setShowBulkUploadSubcategoryModal] = useState(false);
  const { subcategory, subcategoryLoading, subcategoryError, mutate } = fetchSubcategory();
  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [openIndex, setOpenIndex] = useState(null);
  const { category } = fetchCategory();
  const [categoryData, setcategoryData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (subcategory?.length) {
      setoriginalArr(subcategory);
      setfilteredData(subcategory);
    }
  }, [subcategory]);

  useEffect(() => {
    if (category?.length) {
      setcategoryData(category);
    }
  }, [category]);
  
  const itemsPerPage = subcategory?.limit || 10;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  if (subcategoryLoading) return <Loader />;
  if (subcategoryError) return <ErrorWidget error={subcategoryError} />;
  if (!subcategory?.length) return <NoDataPage message="No subcategories available yet" />;

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-end gap-4">
          <div className="flex items-center cursor-pointer">
            <TableSearch
              filteredData={filteredData}
              setfilteredData={setfilteredData}
              originalArr={originalArr}
              searchable={["name", "category.name"]}
            />
          </div>
          <button
            className="text-white bg-black px-3 py-2 cursor-pointer"
            onClick={() => setShowCreateSubcategoryModal(true)}
          >
            Create subcategory
          </button>
        </div>
        <Table
          columns={subcategoryHeader}
          renderRow={(item, i) => (
            <SubcategoryRowTemplate
              key={item.id}
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
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
      <CreateSubcategoryModal
        show={showCreateSubcategoryModal}
        onClose={() => setShowCreateSubcategoryModal(false)}
        categoryData={categoryData}
        mutate={mutate}
      />
      <BulkUploadSubcategoryModal
        show={showBulkUploadSubcategoryModal}
        onClose={() => setShowBulkUploadSubcategoryModal(false)}
      />
    </>
  );
}

export default SubcategorySettingsTable;
