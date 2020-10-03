import React from "react";
import Button from "../styledComponents/Button";

const PaginationNextprev = ({ currentPage, pageNumbers, paginate }) => {
  return (
    <div className="flex center mt-10">
      <Button disabled={currentPage === 1} onClick={() => paginate(-1)}>
        Prev.
      </Button>
      <Button
        disabled={currentPage === pageNumbers}
        onClick={() => paginate(1)}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationNextprev;
