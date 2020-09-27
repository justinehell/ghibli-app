import React from "react";

const Pagination = ({ elementsPerPage, totalElements, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  const styledPagination = {
    marginRight: "1.2em",
    backgroundColor: "white",
    padding: "8px",
    fontWeight: "600",
    height: "100%",
    alignSelf: "center",
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
