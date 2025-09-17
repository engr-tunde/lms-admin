import TableSearch from "../globals/TableSearch"
import Table from "../globals/Table"
import { brandHeader, brandData } from "../../data/settingsData";

function BrandSettingsTable() {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
        <button className="text-white bg-black px-3 py-2 cursor-pointer">Create brand type</button>
      </div>
      <Table 
      columns={brandHeader}
      renderRow={BrandSettingsRowTemplate}
      data={brandData}
      />
    </div>
  );
}


function BrandSettingsRowTemplate(item) {
  return (
    <tr key={item.id} className="border-1 border-t border-merseBorder">
      <td className="py-4 text-sm text-left">{item.brandType}</td>
      <td className="py-4 text-sm text-right">{item.dateCreated}</td>
    </tr>
  );
}


export default BrandSettingsTable;



