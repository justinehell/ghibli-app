import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ elementsPerPage, totalElements, paginate }) => {
    const pageNumbers = [];

// Math.ceil => round up the result
    for(let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        pageNumbers.push(i);
    }

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <Link style={linkStyle} onClick={() => paginate(number)}>
                    {number}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Pagination