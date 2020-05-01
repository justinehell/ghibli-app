import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function Locations() {

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(8);

    const fetchLocations = async () => {
        setLoading(true);
        const data = await fetch('https://ghibliapi.herokuapp.com/locations');
        const locationsData = await data.json();
        setLocations(locationsData);
        setLoading(false);
    }

    useEffect(() => {
        fetchLocations();
    }, []);

    // Get current elements = locations
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = locations.slice(indexOfFirstElement, indexOfLastElement);


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
                <h1>-Locations</h1>
            </div>
            <Pagination 
                elementsPerPage={elementsPerPage} 
                totalElements={locations.length} 
                paginate={paginate} 
            />
            <div>
                {currentElements.map(location => (
                <h4 key={location.id}>
                    <Link style={linkStyle} to={`/locations/${location.id}`}>{location.name}</Link>
                </h4>
                ))}
            </div>
        </div>
    )
}

export default Locations