import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RelatedFilms from "./RelatedFilms";
import RelatedPeople from "./RelatedPeople";
import imgDataLocations from "./../data/imgDataLocations";
import DetailedPageContainer from "../styledComponents/DetailedPage/DetailedPageContainer";
import DetailedPageImg from "../styledComponents/DetailedPage/DetailedPageImg";
import DetailedPageRelated from "../styledComponents/DetailedPage/DetailedPageRelated";
import DetailedPageRelatedContainer from "../styledComponents/DetailedPage/DetailedPageRelatedContainer";

function Location({ match }) {
  const [locationDetail, setLocationDetail] = useState(null);
  const [loading, setLoading] = useState(true);

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

  let relatedPeople = [];
  if (locationDetail !== null) {
    relatedPeople = locationDetail.residents.map((url, index) => (
      <RelatedPeople key={index} urlPeople={url} />
    ));
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

      <DetailedPageContainer>
        <DetailedPageImg
          src={
            imgDataLocations.filter((item) => item.id === locationDetail.id)[0]
              .src
          }
          alt="locationImg"
        />
        <div className="pl-50 pt-15">
          <h2>{locationDetail.name}</h2>
          <h3>Climate : {locationDetail.climate}</h3>
          <h3>Terrain : {locationDetail.terrain}</h3>
          <h3>Surface water : {locationDetail.surface_water}</h3>
        </div>
      </DetailedPageContainer>

      <DetailedPageRelatedContainer>
        <DetailedPageRelated>
          <h2>Related Residents</h2>
          <div style={{ display: "flex" }}>{relatedPeople}</div>
        </DetailedPageRelated>
        <DetailedPageRelated>
          <h2>Related Film(s)</h2>
          <div style={{ display: "flex" }}>{relatedFilms}</div>
        </DetailedPageRelated>
      </DetailedPageRelatedContainer>
    </div>
  );
}

export default Location;
