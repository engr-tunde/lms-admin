const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter(
      (page) =>
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - 1 && page <= currentPage + 1)
    );

  return (
    <div className="flex justify-end mt-6">
      <div className="flex items-center gap-2 text-sm">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-3 py-1 border rounded transition-colors duration-200 ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        {visiblePages.map((page, index) => (
          <span key={page} className="flex items-center">
            {index > 0 && visiblePages[index - 1] !== page - 1 && (
              <span className="px-2">…</span>
            )}
            <button
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                currentPage === page
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          </span>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-3 py-1 border rounded transition-colors duration-200 ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
