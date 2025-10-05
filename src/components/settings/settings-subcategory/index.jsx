import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { subcategoryHeader }  from "../../../data/settingsData"
import {useEffect, useState} from "react"
import CreateSubcategoryModal from "./CreateSubcategoryModal";
import BulkUploadSubcategoryModal from "./BulkUploadSubcategoryModal"
import SubcategorySettingsRowTemplate from "./SubcategorySettingsRowTemplate";
import { fetchSubcategory, fetchCategory } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";

function SubcategorySettingsTable() {
  const [showCreateSubcategoryModal, setShowCreateSubcategoryModal] = useState(false);
  const [showBulkUploadSubcategoryModal, setShowBulkUploadSubcategoryModal] = useState(false);

  const { category } = fetchCategory();
  const { subcategory, subcategoryLoading, subcategoryError } = fetchSubcategory();

  const categoryData = category?.slice(0, 10);
  const subcategoryData = subcategory?.slice(0, 10);
  console.log("Categories in SubcategorySettingsTable:", categoryData);
  console.log("SubcategoryData in SubcategorySettingsTable", subcategoryData);

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (subcategoryData) {
      setoriginalArr(subcategoryData);
      setfilteredData(subcategoryData);
    }
  }, [subcategoryData, filteredData, originalArr]);

  if (subcategoryLoading) return <Loader />
  if (subcategoryError) return <ErrorWidget error={subcategoryError} />
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
      renderRow={(item, i) => SubcategorySettingsRowTemplate(item, i, openIndex, setOpenIndex)}
      data={filteredData}
      />
    </div>
    <CreateSubcategoryModal show={showCreateSubcategoryModal} onClose={() => setShowCreateSubcategoryModal(false)} categoryData={categoryData} />
    <BulkUploadSubcategoryModal show={showBulkUploadSubcategoryModal} onClose={() => setShowBulkUploadSubcategoryModal(false)} />
    </>
  );
}

export default SubcategorySettingsTable;



