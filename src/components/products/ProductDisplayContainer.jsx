import Search from "../globals/Search";
import ProductDisplayCard from "./ProductDisplayCard";
import { useEffect, useState } from "react";
import ProductStatusFilter from "./ProductStatusFilter";
import Pagination from "../globals/Pagination";

function ProductDisplayContainer({
  filteredData,
  setfilteredData,
  originalArr,
  mutate,
}) {
  const [filter, setFilter] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!originalArr) return;
    let products = [...originalArr];

    if (filter.length) {
      products = products.filter(
        (item) => item.approvalStatus === filter.toLowerCase()
      );
    }

    if (searchBy) {
      const query = searchBy.toLowerCase();

      products = products.filter((item) =>
        ["title", "brandName", "keyFeatures", "description"].some((field) => {
          const value = item?.[field];
          if (typeof value === "string")
            return value.toLowerCase().includes(query);
          if (Array.isArray(value))
            return value.some(
              (v) => typeof v === "string" && v.toLowerCase().includes(query)
            );
          return false;
        })
      );
    }
    setfilteredData(products);
    setCurrentPage(1);
  }, [filter, searchBy, originalArr]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData?.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex justify-between items-end mb-2">
        <ProductStatusFilter setFilter={setFilter} filter={filter} />
        <div>
          <Search 
            onSearch={setSearchBy}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {/* {filteredCards} */}
        {currentItems?.length > 0 &&
          currentItems.map((ele, i) => (
            <ProductDisplayCard key={i} data={ele} mutate={mutate} />
          ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}

export default ProductDisplayContainer;
