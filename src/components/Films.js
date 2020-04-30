import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Films() {

    useEffect(() => {
        fetchFilms();
    }, []);

    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        const data = await fetch('https://ghibliapi.herokuapp.com/films');
        const filmsData = await data.json();
        setFilms(filmsData);
    }

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return(
        <div>
            <div className='nav-menu'>
                <Link style={linkStyle} to='/'>
                    <h1>Home-</h1>
                </Link>
                <h1>-Films</h1>
            </div>
            <div>
                {films.map(film => (
                <h4 key={film.id}>
                    <Link style={linkStyle} to={`/films/${film.id}`}>{film.title}</Link>
                </h4>
                ))}
            </div>
        </div>
    )
}

export default Films