import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Locations() {

    useEffect(() => {
        fetchLocations();
    }, []);

    const [locations, setLocations] = useState([]);

    const fetchLocations = async () => {
        const data = await fetch('https://ghibliapi.herokuapp.com/locations');
        const locationsData = await data.json();
        setLocations(locationsData);
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
                <h1>-Locations</h1>
            </div>

            <div>
                {locations.map(location => (
                <h4 key={location.id}>
                    <Link style={linkStyle} to={`/locations/${location.id}`}>{location.name}</Link>
                </h4>
                ))}
            </div>
        </div>
    )
}

export default Locations