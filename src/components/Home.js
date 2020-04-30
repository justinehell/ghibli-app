import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  const category = [
    {
      id: "/people",
      name: "people"
    },
    {
      id: "/films",
      name: "films"
    },
    {
      id: "/locations",
      name: "locations"
    },
    {
      id: "/species",
      name: "species"
    },
  ];

  return(
    <div>
      {category.map(item => 
        <h2 key={item.id}>
          <Link style={linkStyle} to={`${item.id}`}>
              {item.name}
          </Link>
        </h2>)}
    </div>
  )
}

export default Home