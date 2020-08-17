import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RelatedSpecies from "./RelatedSpecies";
import RelatedFilms from "./RelatedFilms";
import imgDataCharacters from "./../data/imgDataCharacters";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";

function Character({ match }) {
  const [characterDetail, setCharacterDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const fetchCharacter = await fetch(
        `https://ghibliapi.herokuapp.com/people/${match.params.id}`
      );
      const detail = await fetchCharacter.json();
      setCharacterDetail(detail);
      setLoading(false);
    };
    fetchCharacter();
  }, [match.params.id]);

  let relatedFilms = [];
  if (characterDetail !== null) {
    relatedFilms = characterDetail.films.map((url, index) => (
      <RelatedFilms key={index} urlFilm={url} />
    ));
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div className="margin-auto width-80 flex space-between items-center">
        <div className="flex space-around letter-spacing-2">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <Link to="/people">
            <h1>Characters</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <h1>{characterDetail.name}</h1>
        </div>
      </div>

      <DetailedPageContainer>
        <DetailedPageImg
          src={
            imgDataCharacters.filter(
              (item) => item.id === characterDetail.id
            )[0].src
          }
          alt="characterImg"
        ></DetailedPageImg>
        <div className="pl-50 pt-15">
          <h1>{characterDetail.name}</h1>
          <h3>Gender : {characterDetail.gender}</h3>
          <h3>Age : {characterDetail.age}</h3>
          <h3>Eye color : {characterDetail.eye_color}</h3>
          <h3>Hair color : {characterDetail.hair_color}</h3>
        </div>
      </DetailedPageContainer>

      <DetailedPageRelatedContainer>
        <DetailedPageRelated>
          <h2>Related Species</h2>
          <RelatedSpecies urlSpecies={characterDetail.species} />
        </DetailedPageRelated>
        <DetailedPageRelated>
          <h2>Related Film(s)</h2>
          <div style={{ display: "flex" }}>{relatedFilms}</div>
        </DetailedPageRelated>
      </DetailedPageRelatedContainer>
    </div>
  );
}

export default Character;
