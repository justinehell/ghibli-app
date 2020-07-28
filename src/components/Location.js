import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RelatedFilms from "./RelatedFilms";
import RelatedPeople from "./RelatedPeople";

function Location({ match }) {
  const [locationDetail, setLocationDetail] = useState({});

  useEffect(() => {
    const fetchLocation = async () => {
      const fetchLocation = await fetch(
        `https://ghibliapi.herokuapp.com/locations/${match.params.id}`
      );
      const data = await fetchLocation.json();
      setLocationDetail(data);
    };
    fetchLocation();
  }, [match.params.id]);

  let relatedPeople = [];
  if (
    Array.isArray(locationDetail.residents) &&
    locationDetail.residents.length > 0
  ) {
    relatedPeople = locationDetail.residents.map((url, index) => (
      <RelatedPeople key={index} urlPeople={url} />
    ));
  }

  let relatedFilms = [];
  if (Array.isArray(locationDetail.films) && locationDetail.films.length) {
    relatedFilms = locationDetail.films.map((url, index) => (
      <RelatedFilms key={index} urlFilm={url} />
    ));
  }

  // TODO : Handle "No Related Resident" case //

  return (
    <div>
      <div className="margin-auto width-80 flex space-between items-center">
        <div className="flex space-around">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <Link to="/locations">
            <h1>Locations</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <h1>{locationDetail.name}</h1>
        </div>
      </div>
      <div>
        <h2>{locationDetail.name}</h2>
        <h3>Climate : {locationDetail.climate}</h3>
        <h3>Terrain : {locationDetail.terrain}</h3>
        <h3>Surface water : {locationDetail.surface_water}</h3>
      </div>
      <div>
        <h3>Related Residents : {relatedPeople}</h3>
      </div>
      <div>
        <h3>Related Films : {relatedFilms}</h3>
      </div>
    </div>
  );
}

export default Location;
