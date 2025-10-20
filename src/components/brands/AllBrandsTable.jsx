import { useState } from "react";
import {
  brandsTableColumnHeader,
  // brandsTableData,
} from "../../data/brandsData";
import Table from "../globals/Table";
import TableSearch from "../globals/TableSearch";
import BrandTableRowTemplate from "./BrandTableRowTemplate";
// import { errorNotification, successNotification } from "../../utils/helpers";
// import { addBrands } from "../../api";

function AllBrandsTable({ filteredData, setfilteredData, originalArr, mutate }) {
  const [openIndex, setOpenIndex] = useState(null);

  // const handleAddBrand = async () => {

  //   const brandValues = {
  //   "name": "Amazing Supplies",
  //   "brand_type": "68af3dec04b4fa547625d239",
  //   "country": "United States",
  //   "description": "Global distributor and e-commerce platform delivering goods worldwide."
  // }

  //   const response = await addBrands(brandValues);
  //   console.log("response", response);
  //   if (response?.status?.toString()?.includes("20")) {
  //     successNotification(response?.data?.message);
  //     // close();
  //     // mutate();
  //   } else {
  //     errorNotification(response?.data?.message[0]);
  //   }
  // };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between">
        <div className="font-semibold">All brands</div>
        <div className="flex items-center cursor-pointer">
          <TableSearch
            filteredData={filteredData}
            setfilteredData={setfilteredData}
            originalArr={originalArr}
            searchable={["name"]}
           />
           {/* <button 
             className="ml-10 border-2 border-merseBorder"
             onClick={handleAddBrand}
            >
            Add Brand
           </button> */}
        </div>
      </div>
      <Table
        columns={brandsTableColumnHeader}
        renderRow={(item, i) => (
          <BrandTableRowTemplate
            key={item.id}
            brand={item}
            i={i}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            mutate={mutate}
          />
        )}
        data={filteredData}
      />
    </div>
  );
}

export default AllBrandsTable;




