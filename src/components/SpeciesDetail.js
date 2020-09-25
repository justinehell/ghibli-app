import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RelatedFilms from "./RelatedFilms";
import RelatedPeople from "./RelatedPeople";
import imgDataSpecies from "./../data/imgDataSpecies";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";

import PaginationNextPrev from "./PaginationNextPrev";

function SpeciesDetail({ match }) {
  const [speciesDetail, setSpeciesDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPageRelatedFilms, setCurrentPageRelatedFilms] = useState(1);
  const [currentPageRelatedPeople, setCurrentPageRelatedPeople] = useState(1);
  const [elementsPerPage] = useState(4);

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

  // Change page "Next - Previous"
  const getPageRelatedFilms = (pageModifyer) => {
    setCurrentPageRelatedFilms(
      (prevCurrentPageRelatedFilms) =>
        prevCurrentPageRelatedFilms + pageModifyer
    );
  };

  const getPageRelatedPeople = (pageModifyer) => {
    setCurrentPageRelatedPeople(
      (prevCurrentPageRelatedPeople) =>
        prevCurrentPageRelatedPeople + pageModifyer
    );
  };

  let pageNumbersRelatedPeople;
  let pageNumbersRelatedFilms;

  let relatedPeople = [];
  if (speciesDetail !== null) {
    // Get current elements = Character
    const indexOfLastElement = currentPageRelatedPeople * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = speciesDetail.people.slice(
      indexOfFirstElement,
      indexOfLastElement
    );
    // Update number of pages
    pageNumbersRelatedPeople = Math.ceil(
      speciesDetail.people.length / elementsPerPage
    );
    relatedPeople = currentElements.map((url, index) => (
      <RelatedPeople key={index} urlPeople={url} />
    ));
  }

  let relatedFilms = [];
  if (speciesDetail !== null) {
    // Get current elements = film
    const indexOfLastElement = currentPageRelatedFilms * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = speciesDetail.films.slice(
      indexOfFirstElement,
      indexOfLastElement
    );
    // Update number of pages
    pageNumbersRelatedFilms = Math.ceil(
      speciesDetail.films.length / elementsPerPage
    );
    relatedFilms = currentElements.map((url, index) => (
      <RelatedFilms key={index} urlFilm={url} />
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
          <Link to="/species">
            <h1>Species</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <h1>{speciesDetail.name}</h1>
        </div>
      </div>

      <DetailedPageContainer>
        <DetailedPageImg
          src={
            imgDataSpecies.filter((item) => item.id === speciesDetail.id)[0].src
          }
          alt="speciesImg"
        />
        <div className="pl-50 pt-15">
          <h1>{speciesDetail.name}</h1>
          <h3>Classification : {speciesDetail.classification}</h3>
          <h3>Eye colors : {speciesDetail.eye_colors}</h3>
          <h3>Hair colors : {speciesDetail.hair_colors}</h3>
        </div>
      </DetailedPageContainer>

      <DetailedPageRelatedContainer>
        <DetailedPageRelated>
          <h2>Related Characters</h2>
          <div style={{ display: "flex" }}>{relatedPeople}</div>
          <PaginationNextPrev
            currentPage={currentPageRelatedPeople}
            pageNumbers={pageNumbersRelatedPeople}
            paginate={getPageRelatedPeople}
          />
        </DetailedPageRelated>
        <DetailedPageRelated>
          <h2>Related Film(s)</h2>
          <div style={{ display: "flex" }}>{relatedFilms}</div>
          <PaginationNextPrev
            currentPage={currentPageRelatedFilms}
            pageNumbers={pageNumbersRelatedFilms}
            paginate={getPageRelatedFilms}
          />
        </DetailedPageRelated>
      </DetailedPageRelatedContainer>
    </div>
  );
}

export default SpeciesDetail;
