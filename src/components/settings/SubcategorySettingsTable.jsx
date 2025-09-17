import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { subcategoryHeader, subcategoryData }  from "../../data/settingsData"
function SubcategorySettingsTable() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
        <button className="text-black px-3 py-2 cursor-pointer border-2">Bulk upload</button>
        <button className="text-white bg-black px-3 py-2 cursor-pointer">Create subcategory</button>
      </div>
      <Table 
      columns={subcategoryHeader}
      renderRow={SubcategorySettingsRowTemplate}
      data={subcategoryData}
      />
    </div>
  );
}


function SubcategorySettingsRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm text-left">{item.subcategory}</td>
      <td className="py-4 text-sm text-center">{item.parentCategory}</td>
      <td className="py-4 text-sm text-right">{item.dateCreated}</td>
    </tr>
  );
}


export default SubcategorySettingsTable;



