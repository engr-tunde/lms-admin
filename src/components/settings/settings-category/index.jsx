import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { categoryHeader } from "../../../data/settingsData";
import CategorySettingsRowTemplate from "./CategorySettingsRowTemplate";
import {useState} from "react"
import BulkUploadCategoryModal from "./BulkUploadCategoryModal"
import CreateBrandCategoryModal from "./CreateBrandCategoryModal";

function CategorySettingsTable({ categoryData }) {
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);

  categoryData = categoryData?.slice(0, 10)
  console.log("Category in CategorySettingsTable:", categoryData);


  return (
    <>
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
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
      renderRow={CategorySettingsRowTemplate}
      data={categoryData} // Display only the first 20 items
      />
    </div>
    <BulkUploadCategoryModal show={showBulkUploadModal} onClose={() => setShowBulkUploadModal(false)} />
    <CreateBrandCategoryModal show={showCreateCategoryModal} onClose={() => setShowCreateCategoryModal(false)} />
    </>
  );
}

export default CategorySettingsTable;