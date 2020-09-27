import React, { useState, useEffect } from "react";
import RelatedFilms from "./RelatedFilms";
import RelatedPeople from "./RelatedPeople";
import imgDataLocations from "./../data/imgDataLocations";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";
import DetailedPageDivImg from "../styledComponents/DetailedPage/DetailedPageDivImg";
import NoData from "../components/NoData";
import NavBar from "./NavBar";
import PaginationNextPrev from "./PaginationNextPrev";

function Location({ match }) {
  const [locationDetail, setLocationDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPageRelatedPeople, setCurrentPageRelatedPeople] = useState(1);
  const [elementsPerPage] = useState(4);

  useEffect(() => {
    const fetchLocation = async () => {
      const fetchLocation = await fetch(
        `https://ghibliapi.herokuapp.com/locations/${match.params.id}`
      );
      const data = await fetchLocation.json();
      setLocationDetail(data);
      setLoading(false);
    };
    fetchLocation();
  }, [match.params.id]);

  // Change page "Next - Previous"
  const getPageRelatedPeople = (pageModifyer) => {
    setCurrentPageRelatedPeople(
      (prevCurrentPageRelatedPeople) =>
        prevCurrentPageRelatedPeople + pageModifyer
    );
  };

  let relatedPagination;
  let pageNumbersRelatedPeople;
  let relatedPeople = [];
  if (
    locationDetail !== null &&
    (locationDetail.residents.length === 0 ||
      locationDetail.residents[0] === "TODO")
  ) {
    relatedPeople = <NoData />;
  } else if (locationDetail !== null && locationDetail.residents.length !== 0) {
    // Get current elements = Character
    const indexOfLastElement = currentPageRelatedPeople * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentElements = locationDetail.residents.slice(
      indexOfFirstElement,
      indexOfLastElement
    );
    // Update number of pages
    pageNumbersRelatedPeople = Math.ceil(
      locationDetail.residents.length / elementsPerPage
    );
    relatedPeople = currentElements.map((url, index) => (
      <RelatedPeople key={index} urlPeople={url} />
    ));
    if (pageNumbersRelatedPeople > 1) {
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

  let relatedFilms = [];
  if (locationDetail !== null) {
    relatedFilms = locationDetail.films.map((url, index) => (
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
          linkTo="/locations"
          category="Locations"
          title={locationDetail.name}
        />
      </div>

      <div className="full-width">
        <DetailedPageContainer>
          <DetailedPageDivImg>
            <DetailedPageImg
              src={
                imgDataLocations.filter(
                  (item) => item.id === locationDetail.id
                )[0].src
              }
              alt="locationImg"
            />
          </DetailedPageDivImg>
          <div className="p-24">
            <h2>{locationDetail.name}</h2>
            <h3>Climate : {locationDetail.climate}</h3>
            <h3>Terrain : {locationDetail.terrain}</h3>
            <h3>Surface water : {locationDetail.surface_water}</h3>
          </div>
        </DetailedPageContainer>

        <DetailedPageRelatedContainer>
          <DetailedPageRelated>
            <h2>Related Residents</h2>
            <div className="flex">{relatedPeople}</div>
            {relatedPagination}
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

export default Location;
