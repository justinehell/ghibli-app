import React from "react";

const PaginationNextprev = ({ currentPage, pageNumbers, paginate }) => {
  return (
    <div className="flex">
      <button disabled={currentPage === 1} onClick={() => paginate(-1)}>
        Prev.
      </button>
      <button
        disabled={currentPage === pageNumbers}
        onClick={() => paginate(1)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationNextprev;
