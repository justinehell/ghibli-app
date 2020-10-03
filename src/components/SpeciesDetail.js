import React, { useState, useEffect } from "react";
import RelatedFilms from "./RelatedFilms";
import RelatedPeople from "./RelatedPeople";
import imgDataSpecies from "./../data/imgDataSpecies";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";
import DetailedPageDivImg from "../styledComponents/DetailedPage/DetailedPageDivImg";
import NavBar from "./NavBar";

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
  const getPageRelatedPeople = (pageModifyer) => {
    setCurrentPageRelatedPeople(
      (prevCurrentPageRelatedPeople) =>
        prevCurrentPageRelatedPeople + pageModifyer
    );
  };

  let paginationRelatedPeople;
  let pageNumbersRelatedPeople;
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
    if (pageNumbersRelatedPeople > 1) {
      paginationRelatedPeople = (
        <PaginationNextPrev
          currentPage={currentPageRelatedPeople}
          pageNumbers={pageNumbersRelatedPeople}
          paginate={getPageRelatedPeople}
        />
      );
    } else {
      paginationRelatedPeople = null;
    }
  }

  const getPageRelatedFilms = (pageModifyer) => {
    setCurrentPageRelatedFilms(
      (prevCurrentPageRelatedFilms) =>
        prevCurrentPageRelatedFilms + pageModifyer
    );
  };

  let paginationRelatedFilms;
  let pageNumbersRelatedFilms;
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
    if (pageNumbersRelatedFilms > 1) {
      paginationRelatedFilms = (
        <PaginationNextPrev
          currentPage={currentPageRelatedFilms}
          pageNumbers={pageNumbersRelatedFilms}
          paginate={getPageRelatedFilms}
        />
      );
    } else {
      paginationRelatedFilms = null;
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="margin-auto width-80 flex space-between items-center">
        <NavBar
          linkTo="/species"
          category="Species"
          title={speciesDetail.name}
        />
      </div>

      <div className="full-width">
        <DetailedPageContainer>
          <DetailedPageDivImg>
            <DetailedPageImg
              src={
                imgDataSpecies.filter((item) => item.id === speciesDetail.id)[0]
                  .src
              }
              alt="speciesImg"
            />
          </DetailedPageDivImg>
          <div className="p-24">
            <h1>{speciesDetail.name}</h1>
            <h3>Classification : {speciesDetail.classification}</h3>
            <h3>Eye colors : {speciesDetail.eye_colors}</h3>
            <h3>Hair colors : {speciesDetail.hair_colors}</h3>
          </div>
        </DetailedPageContainer>

        <DetailedPageRelatedContainer>
          <DetailedPageRelated>
            <h2>Related Characters</h2>
            <div className="flex">{relatedPeople}</div>
            {paginationRelatedPeople}
          </DetailedPageRelated>
          <DetailedPageRelated>
            <h2>Related Film(s)</h2>
            <div className="flex">{relatedFilms}</div>
            {paginationRelatedFilms}
          </DetailedPageRelated>
        </DetailedPageRelatedContainer>
      </div>
    </>
  );
}

export default SpeciesDetail;
