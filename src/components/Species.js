import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function Species() {

    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(8);

    const fetchSpecies = async () => {
        setLoading(true);
        const data = await fetch('https://ghibliapi.herokuapp.com/species');
        const speciesData = await data.json();
        setSpecies(speciesData);
        setLoading(false);
    }

    useEffect(() => {
        fetchSpecies();
    }, []);

    // Get current elements = species
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = species.slice(indexOfFirstElement, indexOfLastElement);


    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return(
        <div>
            <div className='nav-menu'>
                <Link style={linkStyle} to='/'>
                    <h1>Home-</h1>
                </Link>
                <h1>-Species</h1>
            </div>
            <Pagination 
                elementsPerPage={elementsPerPage} 
                totalElements={species.length} 
                paginate={paginate} 
            />
            <div>
                {currentElements.map(item => (
                <h4 key={item.id}>
                    <Link style={linkStyle} to={`/species/${item.id}`}>{item.name}</Link>
                </h4>
                ))}
            </div>
    </div>
    )
}

export default Species