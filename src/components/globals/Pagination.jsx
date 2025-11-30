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
    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between mt-6">
      {/* LEFT SIDE TEXT — OPTIONAL, you can change this */}
      <p className="text-sm text-gray-500">
        Showing page {currentPage} of {totalPages}
      </p>

      {/* PAGINATION BUTTONS */}
      <div className="flex gap-2">

        {/* PREVIOUS BUTTON */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium transition-colors
            ${
              currentPage === 1
                ? "text-gray-400 opacity-50 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          Previous
        </button>

        {/* PAGE NUMBERS */}
        {visiblePages.map((page, index) => (
          <span key={page} className="flex items-center">
            {index > 0 && visiblePages[index - 1] !== page - 1 && (
              <span className="px-2">…</span>
            )}

            <button
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${
                  currentPage === page
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              {page}
            </button>
          </span>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium transition-colors
            ${
              currentPage === totalPages
                ? "text-gray-400 opacity-50 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
