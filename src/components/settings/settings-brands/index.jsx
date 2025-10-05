import TableSearch from "../../globals/TableSearch"
import Table from "../../globals/Table"
import { brandHeader, brandData } from "../../../data/settingsData";
import { useState } from "react"
import CreateBrandModal from "./CreateBrandModal";
import BrandSettingsRowTemplate from "./BrandSettingsRowTemplate";

function BrandSettingsTable() {
  const [showCreateBrandModal, setShowCreateBrandModal] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
            <TableSearch />
        </div>
        <button 
          className="text-white bg-black px-3 py-2 cursor-pointer"
          onClick={() => setShowCreateBrandModal(true)}
        >
          Create brand type
        </button>
      </div>
      <Table 
      columns={brandHeader}
      renderRow={(item, i) => BrandSettingsRowTemplate(item, i, openIndex, setOpenIndex)}
      data={brandData}
      />
      <CreateBrandModal show={showCreateBrandModal} onClose={() => setShowCreateBrandModal(false)} />
    </div>
  );
}

export default BrandSettingsTable;



