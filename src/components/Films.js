import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function Films() {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(8);

    const fetchFilms = async () => {
        setLoading(true);
        const data = await fetch('https://ghibliapi.herokuapp.com/films');
        const filmsData = await data.json();
        setFilms(filmsData);
        setLoading(false);
    }

    useEffect(() => {
        fetchFilms();
    }, []);

    // Get current elements = films
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = films.slice(indexOfFirstElement, indexOfLastElement);


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
                <h1>-Films</h1>
            </div>
            <Pagination 
                elementsPerPage={elementsPerPage} 
                totalElements={films.length} 
                paginate={paginate} 
            />
            <div>
                {currentElements.map(film => (
                <h4 key={film.id}>
                    <Link style={linkStyle} to={`/films/${film.id}`}>{film.title}</Link>
                </h4>
                ))}
            </div>
        </div>
    )
}

export default Films