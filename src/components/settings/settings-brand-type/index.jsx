import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import { brandHeader } from "../../../data/settingsData";
import { useEffect, useState } from "react";
import { fetchBrandType } from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import CreateUpdateBrandTypeModal from "./CreateUpdateBrandTypeModal";
import BrandTypeRowTemplate from "./BrandTypeRowTemplate";

function BrandTypeSettingsTable() {
  const [showCreateBrandModal, setShowCreateBrandModal] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const { brandtype, brandtypeLoading, brandtypeError, mutate } = fetchBrandType();
  console.log("brandtype", brandtype);

  const [originalArr, setoriginalArr] = useState();
  const [filteredData, setfilteredData] = useState();

  useEffect(() => {
    if (brandtype) {
      setoriginalArr(brandtype);
      setfilteredData(brandtype);
    }

  }, [brandtype, filteredData, originalArr]);

  if (brandtypeLoading) return <Loader />;
  if (brandtypeError) return <ErrorWidget error={brandtypeError} />;
  if (!brandtype?.length) return <div>No brand type found</div>;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-end gap-4">
        <div className="flex items-center cursor-pointer">
          <TableSearch 
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
          />
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
        renderRow={(item, i) => (
          <BrandTypeRowTemplate
            i={i}
            item={item}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            mutate={mutate}
          />
        )}
        data={filteredData}
      />
      <CreateUpdateBrandTypeModal
        show={showCreateBrandModal}
        onClose={() => setShowCreateBrandModal(false)}
        mutate={mutate}
      />
    </div>
  );
}

export default BrandTypeSettingsTable;
