/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

function Character({ match }) {
    useEffect(() => {
        fetchCharacter();
    // eslint-disable-next-line no-use-before-define
    }, []);

    const [characterDetail, setCharacterDetail] = useState({});

    const fetchCharacter = async () => {
        const fetchCharacter = await fetch(`https://ghibliapi.herokuapp.com/people/${match.params.id}`);
        const detail = await fetchCharacter.json();
        setCharacterDetail(detail);
    }

    return(
        <div>
            <h1>{characterDetail.name}</h1>
            <h3>Gender : {characterDetail.gender}</h3>
            <h3>Age : {characterDetail.age}</h3>
            <h3>Eye color : {characterDetail.eye_color}</h3>
            <h3>Hair color : {characterDetail.hair_color}</h3>
            <h3>Species : {characterDetail.species}</h3>
        </div>
    )
}

export default Character