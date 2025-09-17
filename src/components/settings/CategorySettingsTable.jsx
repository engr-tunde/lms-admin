import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { categoryHeader, categoryData } from "../../data/settingsData";

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


function CategorySettingsRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm text-left">{item.category}</td>
      <td className="py-4 text-sm text-center">{item.subCategory}</td>
      <td className="py-4 text-sm text-right">{item.dateCreated}</td>
    </tr>
  );
}


export default CategorySettingsTable;



