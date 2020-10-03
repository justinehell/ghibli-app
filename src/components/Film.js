import React, { useState, useEffect } from "react";
import RelatedSpecies from "./RelatedSpecies";
import RelatedPeople from "./RelatedPeople";
import imgDataFilms from "./../data/imgDataFilms";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";
import DetailedPageDivImg from "../styledComponents/DetailedPage/DetailedPageDivImg";
import NoData from "../components/NoData";

import PaginationNextPrev from "./PaginationNextPrev";
import NavBar from "./NavBar";

function Film({ match }) {
  const [filmDetail, setFilmDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPageRelatedPeople, setCurrentPageRelatedPeople] = useState(1);
  const [elementsPerPage] = useState(4);

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

  // Change page "Next - Previous"
  const getPageRelatedPeople = (pageModifyer) => {
    setCurrentPageRelatedPeople(
      (prevCurrentPageRelatedPeople) =>
        prevCurrentPageRelatedPeople + pageModifyer
    );
  };

  let relatedSpecies = [];
  if (filmDetail !== null) {
    relatedSpecies = filmDetail.species.map((url, index) => (
      <RelatedSpecies key={index} urlSpecies={url} />
    ));
  }

  let relatedPagination;
  let pageNumbersRelatedPeople;
  let relatedPeople = null;
  let urlRelatedPeopleEmpty = "https://ghibliapi.herokuapp.com/people/";

  if (filmDetail !== null && filmDetail.people[0] === urlRelatedPeopleEmpty) {
    relatedPeople = <NoData />;
  } else if (filmDetail !== null) {
    // Get current elements = Character
    const indexOfLastElement = currentPageRelatedPeople * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = filmDetail.people.slice(
      indexOfFirstElement,
      indexOfLastElement
    );
    // Update number of pages
    pageNumbersRelatedPeople = Math.ceil(
      filmDetail.people.length / elementsPerPage
    );
    relatedPeople = currentElements.map((url, index) => (
      <RelatedPeople key={index} urlPeople={url} />
    ));
    if (
      pageNumbersRelatedPeople !== undefined ||
      pageNumbersRelatedPeople === 1
    ) {
      relatedPagination = (
        <PaginationNextPrev
          currentPage={currentPageRelatedPeople}
          pageNumbers={pageNumbersRelatedPeople}
          paginate={getPageRelatedPeople}
        />
      );
    } else {
      relatedPagination = null;
    }
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="margin-auto width-80 flex space-between items-center">
        <NavBar linkTo="/films" category="Films" title={filmDetail.title} />
      </div>

      <div className="full-width">
        <DetailedPageContainer>
          <DetailedPageDivImg>
            <DetailedPageImg
              src={
                imgDataFilms.filter((item) => item.id === filmDetail.id)[0].src
              }
              alt="speciesImg"
            />
          </DetailedPageDivImg>
          <div className="p-24">
            <h2>{filmDetail.title}</h2>
            <h3>Director : {filmDetail.director}</h3>
            <h3>Producer : {filmDetail.producer}</h3>
            <h3>Release date : {filmDetail.release_date}</h3>
            <h3>
              Description : <br />
              {filmDetail.description}
            </h3>
          </div>
        </DetailedPageContainer>

        <DetailedPageRelatedContainer>
          <DetailedPageRelated>
            <h2>Related Species</h2>
            <div className="flex">{relatedSpecies}</div>
          </DetailedPageRelated>
          <DetailedPageRelated>
            <h2>Related Characters</h2>
            <div className="flex">{relatedPeople}</div>
            {relatedPagination}
          </DetailedPageRelated>
        </DetailedPageRelatedContainer>
      </div>
    </>
  );
}

export default Film;
