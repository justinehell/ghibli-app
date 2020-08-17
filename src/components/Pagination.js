import React from "react";

const Pagination = ({ elementsPerPage, totalElements, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  const styledPagination = {
    marginRight: "1.2em",
    backgroundColor: "black",
    borderRadius: "15px",
    padding: "12px",
    border: "2px solid black",
    fontWeight: "600",
    color: "ivory",
  };

  return (
    <div className="flex">
      {pageNumbers.map((number) => (
        <button
          onClick={() => paginate(number)}
          key={number}
          style={styledPagination}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
