import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { categoryHeader, categoryData } from "../../data/settingsData";
import DeleteBrandCategoryModal from "./DeleteBrandCategoryModal";
import {useState} from "react"
import { IoEllipsisVertical } from "react-icons/io5";

function CategorySettingsTable() {

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
        <button className="text-black px-3 py-2 cursor-pointer border-2">Bulk upload</button>
        <button className="text-white bg-black px-3 py-2 cursor-pointer">Create category</button>
      </div>
      <Table 
      columns={categoryHeader}
      renderRow={CategorySettingsRowTemplate}
      data={categoryData}
      />
    </div>
  );
}


function CategorySettingsRowTemplate(item, i) {
  const [actionOpen, setActionOpen] = useState(null)
  const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
  // const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleActionClick = (i) => {
    setActionOpen(actionOpen === i ? null : i);
  };

  return (
    <>
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm text-left">{item.category}</td>
      <td className="py-4 text-sm text-center">{item.subCategory}</td>
      <td className="py-4 text-sm text-right">{item.dateCreated}</td>
      <td className="py-4 text-sm text-right">
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
                onClick={() => setShowDeleteCategoryModal(true)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
    <DeleteBrandCategoryModal show={showDeleteCategoryModal} onClose={() => setShowDeleteCategoryModal(false)} categoryToDelete={item.category} />
    </>
  );
}


export default CategorySettingsTable;



