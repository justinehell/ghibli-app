import React from 'react';
import { Link } from 'react-router-dom';
import PeopleCategory from './../images/categories/people.jpg';
import FilmsCategory from './../images/categories/films.jpg';
import LocationsCategory from './../images/categories/locations.jpg';
import SpeciesCategory from './../images/categories/species2.jpg';

function Home() {

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return(
  <div className="font-30 flex pf-50 width-80 margin-auto">
      <div className="bg-color text-center m-150-50-50-0 border-radius-15 overflow-hidden inline-block half-width half-height">
        <Link style={linkStyle} to='/people'>
          <div className="bg-blue pb-15">
            <img alt="category-people" className="pb-10 full-width h-250 obj-fit-cover" src={PeopleCategory}></img>
            <span>People</span>
          </div>
        </Link>
      </div>
      <div className="bg-color text-center m-150-50-50-0 border-radius-15 overflow-hidden inline-block half-width half-height">
        <Link style={linkStyle} to='/films'>
          <div className="pb-15 bg-green">
          <img alt="category-people" className="pb-10 full-width h-250 obj-fit-cover obj-pos-arr" src={FilmsCategory}></img>
            <span>Films</span>
          </div>
        </Link>
      </div>
      <div className="bg-color text-center m-150-50-50-0 border-radius-15 overflow-hidden inline-block half-width half-height">
        <Link style={linkStyle} to='/locations'>
          <div className="pb-15 bg-coral">
          <img alt="category-people" className="pb-10 full-width h-250 obj-fit-cover" src={LocationsCategory}></img>
            <span>Locations</span>
          </div>
        </Link>
      </div>
      <div className="bg-color text-center m-150-0-50-0 border-radius-15 overflow-hidden inline-block half-width half-height">
        <Link style={linkStyle} to='/species'>
          <div className="pb-15 bg-plum">
          <img alt="category-people" className="pb-10 full-width h-250 obj-fit-cover" src={SpeciesCategory}></img>
            <span>Species</span>
          </div>
        </Link>
      </div>
  </div>
  )
}

export default Home