export const PaginationComponent = ({
  totalCauses,
  numOfCausesPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalCauses / numOfCausesPerPage);
  const visiblePages = 5;

  // Step 1: Calculate raw start and end pages
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let endPage = startPage + visiblePages - 1;

  // Step 2: Adjust if endPage exceeds totalPages
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  // Step 3: Build exact number of visible pages (limit to 5 max)
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className="flex justify-center items-center mt-8">
        <p>
          Showing {currentPage} of {totalPages}
        </p>
      </div>
      <div className="pagination-card flex justify-center items-center mt-6">
        {currentPage > 1 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
        )}
        {pages.map((page) => (
          <button
            key={page}
            className={`${
              page === currentPage
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-black"
            } px-4 py-2 border-2 rounded ml-3`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded ml-3"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
