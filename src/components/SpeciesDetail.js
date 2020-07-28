import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RelatedFilms from "./RelatedFilms";
import RelatedPeople from "./RelatedPeople";
import imgDataSpecies from "./../data/imgDataSpecies";

function SpeciesDetail({ match }) {
  const [speciesDetail, setSpeciesDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeciesDetail = async () => {
      const fetchSpeciesDetail = await fetch(
        `https://ghibliapi.herokuapp.com/species/${match.params.id}`
      );
      const data = await fetchSpeciesDetail.json();
      setSpeciesDetail(data);
      setLoading(false);
    };
    fetchSpeciesDetail();
  }, [match.params]);

  let relatedPeople = [];
  if (Array.isArray(speciesDetail.people) && speciesDetail.people.length) {
    relatedPeople = speciesDetail.people.map((url, index) => (
      <RelatedPeople key={index} urlPeople={url} />
    ));
  }

  let relatedFilms = [];
  if (Array.isArray(speciesDetail.films) && speciesDetail.films.length) {
    relatedFilms = speciesDetail.films.map((url, index) => (
      <RelatedFilms key={index} urlFilm={url} />
    ));
  }

  let test = imgDataSpecies.filter((item) => item.id === speciesDetail.id);
  console.log("speciesDetail.id", speciesDetail.id);
  console.log("test", test);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="margin-auto width-80 flex space-between items-center">
        <div className="flex space-around">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <Link to="/species">
            <h1>Species</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <h1>{speciesDetail.name}</h1>
        </div>
      </div>

      <div style={{ backgroundColor: "blue" }}>
        <img
          src={
            imgDataSpecies.filter((item) => item.id === speciesDetail.id)[0].src
          }
          alt="speciesImg"
        />
        <div style={{ backgroundColor: "pink", width: "450px" }}>
          <h2>{speciesDetail.name}</h2>
          <h3>Classification : {speciesDetail.classification}</h3>
          <h3>Eye colors : {speciesDetail.eye_colors}</h3>
          <h3>Hair colors : {speciesDetail.hair_colors}</h3>
        </div>
      </div>

      <div>
        <h3>Related Characters : {relatedPeople}</h3>
      </div>
      <div>
        <h3>Related Films : {relatedFilms}</h3>
      </div>
    </div>
  );
}

export default SpeciesDetail;
