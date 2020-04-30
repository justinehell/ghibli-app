import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Species() {

    useEffect(() => {
        fetchSpecies();
    }, []);

    const [species, setSpecies] = useState([]);

    const fetchSpecies = async () => {
        const data = await fetch('https://ghibliapi.herokuapp.com/species');
        const speciesData = await data.json();
        setSpecies(speciesData);
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
                <h1>-Species</h1>
            </div>
        <div>
            {species.map(item => (
            <h4 key={item.id}>
                <Link style={linkStyle} to={`/species/${item.id}`}>{item.name}</Link>
            </h4>
            ))}
        </div>
    </div>
    )
}

export default Species