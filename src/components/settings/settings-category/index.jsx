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

function CategorySettingsTable() {
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [categoryData, setcategoryData] = useState(false);

  const { category, categoryLoading, categoryError, mutate } = fetchCategory();
  const { subcategory } = fetchSubcategory();

  useEffect(() => {
    if (category) {
      const catData = category;
      setcategoryData(catData);
    }
  }, [category]);
  console.log("categoryData", categoryData);
  console.log("subcategoryData", subcategory);

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (categoryData) {
      setoriginalArr(categoryData);
      setfilteredData(categoryData);
    }
    
  }, [categoryData, filteredData, originalArr]);

  if (categoryLoading) return <Loader />;
  if (categoryError) return <ErrorWidget error={categoryError} />;
  if (!categoryData?.length) return <div>No category found</div>;

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
              item={item}
              i={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              mutate={mutate}
              subcategory={subcategory}
            />
          )}
          data={filteredData} // Display only the first 20 items
        />
      </div>
      <BulkUploadCategoryModal
        show={showBulkUploadModal}
        onClose={() => setShowBulkUploadModal(false)}
      />
      <CreateUpdateCategoryModal
        show={showCreateCategoryModal}
        onClose={() => setShowCreateCategoryModal(false)}
      />
    </>
  );
}

export default CategorySettingsTable;
