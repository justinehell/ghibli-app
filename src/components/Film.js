import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RelatedSpecies from "./RelatedSpecies";
import imgDataFilms from "./../data/imgDataFilms";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";

function Film({ match }) {
  const [filmDetail, setFilmDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      const fetchFilm = await fetch(
        `https://ghibliapi.herokuapp.com/films/${match.params.id}`
      );
      const detail = await fetchFilm.json();
      setFilmDetail(detail);
      setLoading(false);
    };
    fetchFilm();
  }, [match.params.id]);

  let relatedSpecies = [];
  if (filmDetail !== null) {
    relatedSpecies = filmDetail.species.map((url, index) => (
      <RelatedSpecies key={index} urlSpecies={url} />
    ));
  }

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
          <Link to="/films">
            <h1>Films</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <h1>{filmDetail.title}</h1>
        </div>
      </div>

      <DetailedPageContainer>
        <DetailedPageImg
          src={imgDataFilms.filter((item) => item.id === filmDetail.id)[0].src}
          alt="speciesImg"
        />
        <div className="p-15-15-15-50">
          <h2>{filmDetail.title}</h2>
          <h3>Director : {filmDetail.director}</h3>
          <h3>Producer : {filmDetail.producer}</h3>
          <h3>Release date : {filmDetail.release_date}</h3>
          <h3>
            Description : <br />
            <br />
            {filmDetail.description}
          </h3>
        </div>
      </DetailedPageContainer>

      <DetailedPageRelatedContainer>
        <DetailedPageRelated>
          <h2>Related Species</h2>
          <div style={{ display: "flex" }}>{relatedSpecies}</div>
        </DetailedPageRelated>
        <DetailedPageRelated>
          <h2>Related Characters</h2>
          <div style={{ display: "flex" }}>n/a</div>
        </DetailedPageRelated>
        <DetailedPageRelated>
          <h2>Related Locations</h2>
          <div style={{ display: "flex" }}>n/a</div>
        </DetailedPageRelated>
      </DetailedPageRelatedContainer>
    </div>
  );
}

export default Film;
