export const PaginationComponent = ({
  totalCauses,
  numOfCausesPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = []; //all the pages
  let totalPages = Math.ceil(totalCauses / numOfCausesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-card flex justify-center items-center mt-8">
      {currentPage !== 1 && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCurrentPage(currentPage - 1)}>
          Prev
        </button>
      )}
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={page === currentPage ? "bg-green-500 text-white px-4 py-2 border-2 rounded ml-3" : "bg-gray-100 box-border rounded-sm px-4 py-2 border-2 ml-3"}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      {currentPage !== totalPages &&  <button className="bg-blue-500 text-white px-4 py-2 rounded ml-3" onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>}
    </div>
  );
};
