import Search from "../globals/Search";
import ProductDisplayCard from "./ProductDisplayCard";
import { formatter } from "../../utils/helpers";
import { useEffect, useState } from "react";
import ProductStatusFilter from "./ProductStatusFilter";

function ProductDisplayContainer({
  filteredData,
  setfilteredData,
  originalArr,
}) {
  // console.log("filteredData", filteredData);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter.length) {
      let products = originalArr?.filter(
        (item) => item.approvalStatus === filter
      );
      setfilteredData(products);
    } else {
      setfilteredData(originalArr);
    }
  }, [filter]);

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-between items-end mb-2">
        <ProductStatusFilter setFilter={setFilter} filter={filter} />
        <div>
          <Search />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {/* {filteredCards} */}
        {filteredData?.length &&
          filteredData?.map((ele, i) => (
            <ProductDisplayCard key={i} data={ele} />
          ))}
      </div>
    </div>
  );
}

export default ProductDisplayContainer;
