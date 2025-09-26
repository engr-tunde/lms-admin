import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { subcategoryHeader, subcategoryData }  from "../../../data/settingsData"
import { IoEllipsisVertical } from "react-icons/io5";
import {useState} from "react"
import CreateSubcategoryModal from "./CreateSubcategoryModal";
import DeleteSubCategoryModal from "./DeleteSubcategoryModal";
import BulkUploadSubcategoryModal from "./BulkUploadSubcategoryModal"

function SubcategorySettingsTable() {
  const [showCreateSubcategoryModal, setShowCreateSubcategoryModal] = useState(false);
  const [showBulkUploadSubcategoryModal, setShowBulkUploadSubcategoryModal] = useState(false);

  return (
    <>
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
        <button 
          className="text-black px-3 py-2 cursor-pointer border-2"
          onClick={() => setShowBulkUploadSubcategoryModal(true)}
        >
          Bulk upload
        </button>
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
    <CreateSubcategoryModal show={showCreateSubcategoryModal} onClose={() => setShowCreateSubcategoryModal(false)} />
    <BulkUploadSubcategoryModal show={showBulkUploadSubcategoryModal} onClose={() => setShowBulkUploadSubcategoryModal(false)} />
    </>
  );
}


function SubcategorySettingsRowTemplate(item, i) {
  const [actionOpen, setActionOpen] = useState(null)
  const [showDeleteSubcategoryModal, setShowDeleteSubcategoryModal] = useState(false);
  // const [subcategoryToDelete, setSubcategoryToDelete] = useState(null);
  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  }

  return (
    <>
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm">{item.subcategory}</td>
      <td className="py-4 text-sm">{item.parentCategory}</td>
      <td className="py-4 text-sm">{item.dateCreated}</td>
      <td className="py-4 text-sm">
        <div className="relative cursor-pointer">
          <button
            onClick={() => handleActionClick(i)}
          >
            <IoEllipsisVertical size={20} />
          </button>
          {actionOpen === i && (
            <div className="absolute z-10 w-[100px] text-xs rounded-md flex flex-col top-6 left-0 bg-white shadow-xl">
              <button
                className="text-sm text-left px-5 py-2"
              >
                Edit
              </button>
              <button
                className="text-sm text-left px-5 py-2"
                onClick={() => setShowDeleteSubcategoryModal(true)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
    <DeleteSubCategoryModal show={showDeleteSubcategoryModal} onClose={() => setShowDeleteSubcategoryModal(false)} subcategoryToDelete={item.subcategory} />
    </>
  );
}


export default SubcategorySettingsTable;



