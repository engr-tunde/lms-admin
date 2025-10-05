import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { subcategoryHeader }  from "../../../data/settingsData"
import {useState} from "react"
import CreateSubcategoryModal from "./CreateSubcategoryModal";
import BulkUploadSubcategoryModal from "./BulkUploadSubcategoryModal"
import SubcategorySettingsRowTemplate from "./SubcategorySettingsRowTemplate";

function SubcategorySettingsTable({ categoryData, subcategoryData }) {
  const [showCreateSubcategoryModal, setShowCreateSubcategoryModal] = useState(false);
  const [showBulkUploadSubcategoryModal, setShowBulkUploadSubcategoryModal] = useState(false);
  
  categoryData = categoryData?.slice(0, 10)
  console.log("Categories in SubcategorySettingsTable:", categoryData);
  console.log("SubcategoryData in SubTable", subcategoryData);


  return (
    <>
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
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
      renderRow={SubcategorySettingsRowTemplate}
      data={subcategoryData}
      />
    </div>
    <CreateSubcategoryModal show={showCreateSubcategoryModal} onClose={() => setShowCreateSubcategoryModal(false)} categoryData={categoryData} />
    <BulkUploadSubcategoryModal show={showBulkUploadSubcategoryModal} onClose={() => setShowBulkUploadSubcategoryModal(false)} />
    </>
  );
}

export default SubcategorySettingsTable;



