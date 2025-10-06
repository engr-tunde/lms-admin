import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { categoryHeader } from "../../../data/settingsData";
import CategorySettingsRowTemplate from "./CategorySettingsRowTemplate";
import { useEffect, useState } from "react";
import BulkUploadCategoryModal from "./BulkUploadCategoryModal";
import CreateBrandCategoryModal from "./CreateBrandCategoryModal";
import { fetchCategory } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";

function CategorySettingsTable() {
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [categoryData, setcategoryData] = useState(false);
  const { category, categoryLoading, categoryError } = fetchCategory();

  useEffect(() => {
    if (category) {
      const catData = category?.slice(0, 10);
      setcategoryData(catData);
    }
  }, [category]);

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
            <CategorySettingsRowTemplate
              item={item}
              i={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          )}
          data={filteredData} // Display only the first 20 items
        />
      </div>
      <BulkUploadCategoryModal
        show={showBulkUploadModal}
        onClose={() => setShowBulkUploadModal(false)}
      />
      <CreateBrandCategoryModal
        show={showCreateCategoryModal}
        onClose={() => setShowCreateCategoryModal(false)}
      />
    </>
  );
}

export default CategorySettingsTable;
