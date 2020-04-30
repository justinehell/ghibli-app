import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RelatedSpecies = (props) => {

    const [relatedSpecies, setRelatedSpecies ] = useState([]);

    useEffect(() => {
        const fetchRelatedSpecies = async () => {
            const response = await fetch(props.urlSpecies);
            const data = await response.json();
            setRelatedSpecies(data);
        }
        fetchRelatedSpecies();
    }, [props]);

    const linkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return(
        <Link style={linkStyle} to={`/species/${relatedSpecies.id}`}>
            <ul>
                <li>{relatedSpecies.name}</li>
            </ul>
        </Link>
    )
}

export default RelatedSpecies