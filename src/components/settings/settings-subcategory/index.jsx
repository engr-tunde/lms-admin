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

function SubcategorySettingsTable() {
  const [showCreateSubcategoryModal, setShowCreateSubcategoryModal] =
    useState(false);
  const [showBulkUploadSubcategoryModal, setShowBulkUploadSubcategoryModal] =
    useState(false);
  const [categoryData, setcategoryData] = useState();
  const [subcategoryData, setsubcategoryData] = useState(false);

  const { category } = fetchCategory();
  const { subcategory, subcategoryLoading, subcategoryError, mutate } =
    fetchSubcategory();

  useEffect(() => {
    if (category) {
      const catData = category?.slice(0, 10);
      setcategoryData(catData);
    }
  }, [category]);

  useEffect(() => {
    if (subcategory) {
      const subcatData = subcategory?.slice(0, 10);
      setsubcategoryData(subcatData);
    }
  }, [subcategory]);

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (subcategoryData) {
      setoriginalArr(subcategoryData);
      setfilteredData(subcategoryData);
    }
  }, [subcategoryData]);

  if (subcategoryLoading) return <Loader />;
  if (subcategoryError) return <ErrorWidget error={subcategoryError} />;
  if (!subcategoryData?.length) return <div>No subcategory found</div>;

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
          {/* <button 
          className="text-black px-3 py-2 cursor-pointer border-2"
          onClick={() => setShowBulkUploadSubcategoryModal(true)}
        >
          Bulk upload
        </button> */}
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
          data={filteredData}
        />
      </div>
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
