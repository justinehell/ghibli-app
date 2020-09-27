import React, { useState, useEffect } from "react";

import RelatedSpecies from "./RelatedSpecies";
import RelatedFilms from "./RelatedFilms";
import imgDataCharacters from "./../data/imgDataCharacters";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";
import DetailedPageDivImg from "../styledComponents/DetailedPage/DetailedPageDivImg";
import NavBar from "./NavBar";

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
    <>
      <div className="margin-auto width-80 flex space-between items-center">
        <NavBar
          linkTo="/people"
          category="Characters"
          title={characterDetail.name}
        />
      </div>

      <div className="full-width">
        <DetailedPageContainer>
          <DetailedPageDivImg>
            <DetailedPageImg
              src={
                imgDataCharacters.filter(
                  (item) => item.id === characterDetail.id
                )[0].src
              }
              alt="characterImg"
            ></DetailedPageImg>
          </DetailedPageDivImg>
          <div className="p-24">
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
            <div className="flex">
              <RelatedSpecies urlSpecies={characterDetail.species} />
            </div>
          </DetailedPageRelated>
          <DetailedPageRelated>
            <h2>Related Film(s)</h2>
            <div className="flex">{relatedFilms}</div>
          </DetailedPageRelated>
        </DetailedPageRelatedContainer>
      </div>
    </>
  );
}

export default Character;
