import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RelatedPeople = (props) => {

    const [relatedPeople, setRelatedPeople ] = useState([]);

    useEffect(() => {
        const fetchRelatedPeople = async () => {
            const response = await fetch(props.urlPeople);
            const data = await response.json();
            setRelatedPeople(data);
            console.log("data", data, props);
        }
        fetchRelatedPeople();
    }, [props]);

    return(
    <Link to={`/people/${relatedPeople.id}`}>
        <ul>
            <li>{relatedPeople.name}</li>
        </ul>
    </Link>
    )
}

export default RelatedPeople