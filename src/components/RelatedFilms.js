import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RelatedFilms = (props) => {

    const [relatedFilms, setRelatedFilms ] = useState([]);

    useEffect(() => {
        const fetchRelatedFilms = async () => {
            const response = await fetch(props.urlFilm);
            const data = await response.json();
            setRelatedFilms(data);
        }
        fetchRelatedFilms();
    }, [props]);

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return(
        <Link style={linkStyle} to={`/films/${relatedFilms.id}`}>
            <ul>
                <li>{relatedFilms.title}</li>
            </ul>
        </Link>
    )
}

export default RelatedFilms