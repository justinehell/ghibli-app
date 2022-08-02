import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgDataFilms from "./../data/imgDataFilms.json";
import findImageById from "../findImageById";
import DetailedPageRelatedImg from "./../styledComponents/DetailedPage/DetailedPageRelatedImg";

const RelatedFilms = (props) => {
  const [relatedFilms, setRelatedFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedFilms = async () => {
      const response = await fetch(props.urlFilm);
      const data = await response.json();
      setRelatedFilms(data);
      setLoading(false);
    };
    fetchRelatedFilms();
  }, [props]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Link
      to={`/films/${relatedFilms.id}`}
      style={{ width: "80px", paddingRight: "15px", textAlign: "center" }}
    >
      <DetailedPageRelatedImg
        src={findImageById(imgDataFilms, relatedFilms.id)}
        alt={`avatar of the movie ${relatedFilms.title}`}
      />
      <p>{relatedFilms.title}</p>
    </Link>
  );
};

export default RelatedFilms;
