import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgDataSpecies from "./../data/imgDataSpecies.json";
import findImageById from "../findImageById";
import DetailedPageRelatedImg from "./../styledComponents/DetailedPage/DetailedPageRelatedImg";

const RelatedSpecies = (props) => {
  const [relatedSpecies, setRelatedSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedSpecies = async () => {
      const response = await fetch(props.urlSpecies);
      const data = await response.json();
      setRelatedSpecies(data);
      setLoading(false);
    };
    fetchRelatedSpecies();
  }, [props]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Link
      to={`/species/${relatedSpecies.id}`}
      style={{ width: "80px", paddingRight: "15px", textAlign: "center" }}
    >
      <DetailedPageRelatedImg
        src={findImageById(imgDataSpecies, relatedSpecies.id)}
        alt={`avatar of the species ${relatedSpecies.name}`}
      />
      <p>{relatedSpecies.name}</p>
    </Link>
  );
};

export default RelatedSpecies;
