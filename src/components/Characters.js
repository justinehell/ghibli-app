import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function Characters() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(8);

    const fetchPeople = async () => {
        setLoading(true);
        const data = await fetch('https://ghibliapi.herokuapp.com/people');
        const peopleData = await data.json();
        setCharacters(peopleData);
        setLoading(false);
    }

    useEffect(() => {
        fetchPeople();
    }, []);

    // Get current elements = characters
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = characters.slice(indexOfFirstElement, indexOfLastElement);


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
                <h1>-Characters</h1>
            </div>
            <Pagination 
                elementsPerPage={elementsPerPage} 
                totalElements={characters.length} 
                paginate={paginate} 
            />
            <div>
                {currentElements.map(character => (
                <h4 key={character.id}>
                    <Link style={linkStyle} to={`/people/${character.id}`} >{character.name}</Link>
                </h4>
                ))}
            </div>
        </div>
    )
}

export default Characters