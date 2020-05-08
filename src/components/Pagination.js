import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ elementsPerPage, totalElements, paginate }) => {
    const pageNumbers = [];

// Math.ceil => round up the result
    for(let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        pageNumbers.push(i);
    }

    const styledPagination = {
        marginRight: "1.2em",
        backgroundColor: "black",
        borderRadius: "15px",
        padding: "12px",
        border: "2px solid black",
        fontWeight: "600"
    }

    return (
        <div className="flex">
            {pageNumbers.map(number => (
                <button style={styledPagination} key={number}>
                    <Link to='/people' onClick={() => paginate(number)}>
                    {number}
                    </Link>
                </button>
            ))}
        </div>
    )
}

export default Pagination