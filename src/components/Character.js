import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSpecies from './RelatedSpecies';

function Character({ match }) {

    const [characterDetail, setCharacterDetail] = useState({});

    useEffect(() => {
        const fetchCharacter = async () => {
            const fetchCharacter = await fetch(`https://ghibliapi.herokuapp.com/people/${match.params.id}`);
            const detail = await fetchCharacter.json();
            setCharacterDetail(detail);
        }
        fetchCharacter();
    }, [match.params.id]);

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
                <Link style={linkStyle} to='/people'>
                    <h1>-Characters-</h1>
                </Link>
                    <h1>-{characterDetail.name}</h1>
            </div>
            <div>
                <h2>{characterDetail.name}</h2>
                <h3>Gender : {characterDetail.gender}</h3>
                <h3>Age : {characterDetail.age}</h3>
                <h3>Eye color : {characterDetail.eye_color}</h3>
                <h3>Hair color : {characterDetail.hair_color}</h3>
            </div>
            <div>
                <h3>Species : <RelatedSpecies urlSpecies={characterDetail.species} /></h3> 
            </div>
        </div>

    )
}

export default Character