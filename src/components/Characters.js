import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Characters() {

    useEffect(() => {
        fetchPeople();
    }, []);

    const [characters, setCharacters] = useState([]);

    const fetchPeople = async () => {
        const data = await fetch('https://ghibliapi.herokuapp.com/people');
        const peopleData = await data.json();
        setCharacters(peopleData);
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
                <h1>-Characters</h1>
            </div>

            <div>
                {characters.map(character => (
                <h4 key={character.id}>
                    <Link style={linkStyle} to={`/people/${character.id}`}>{character.name}</Link>
                </h4>
                ))}
            </div>
        </div>
    )
}

export default Characters