import Search from "../globals/Search";
import ProductDisplayCard from "./ProductDisplayCard";
import { useEffect, useState } from "react";
import ProductStatusFilter from "./ProductStatusFilter";

function ProductDisplayContainer({
  filteredData,
  setfilteredData,
  originalArr,
  mutate,
}) {
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
    setCurrentPage(1);
  }, [filter]);

  const [currentPage, setCurrentPage] = useState(1);
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
          <Search />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {/* {filteredCards} */}
        {currentItems?.length > 0 &&
          currentItems.map((ele, i) => (
            <ProductDisplayCard key={i} data={ele} mutate={mutate} />
          ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4 text-sm mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:font-light"
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:font-light"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDisplayContainer;
