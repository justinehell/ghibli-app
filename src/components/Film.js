import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RelatedSpecies from './RelatedSpecies';

function Film({ match }) {

    const [filmDetail, setFilmDetail] = useState({});

    useEffect(() => {
        const fetchFilm = async () => {
            const fetchFilm = await fetch(`https://ghibliapi.herokuapp.com/films/${match.params.id}`);
            const detail = await fetchFilm.json();
            setFilmDetail(detail);
        };
        fetchFilm();
    }, [match.params.id]);

    let relatedSpecies = [];
    if (Array.isArray(filmDetail.species) && filmDetail.species.length) {
        relatedSpecies = filmDetail.species.map((url, index) => <RelatedSpecies key={index} urlSpecies={url} />);
    };

    return(
        <div>
            <div className='nav-menu'>
                <Link to='/'>
                    <h1>Home-</h1>
                </Link>
                <Link to='/films'>
                    <h1>-Films-</h1>
                </Link>
                    <h1>-{filmDetail.title}</h1>
            </div>
            <div>
                <h2>{filmDetail.title}</h2>
                <h3>Director : {filmDetail.director}</h3>
                <h3>Producer : {filmDetail.producer}</h3>
                <h3>Release date : {filmDetail.release_date}</h3>
                <h3>Description : {filmDetail.description}</h3>
                <h3>Related Characters : n/a</h3>
                <h3>Related Locations : n/a</h3>
            </div>
            <div>
                <h3>Related Species : {relatedSpecies}</h3> 
            </div>
        </div>
    )
}

export default Film