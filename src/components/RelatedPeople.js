import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgDataCharacters from "./../data/imgDataCharacters.json";
import DetailedPageRelatedImg from "./../styledComponents/DetailedPage/DetailedPageRelatedImg";

const RelatedPeople = (props) => {
  const [relatedPeople, setRelatedPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPeople = async () => {
      const response = await fetch(props.urlPeople);
      const data = await response.json();
      setRelatedPeople(data);
      setLoading(false);
    };
    fetchRelatedPeople();
  }, [props]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Link
      to={`/people/${relatedPeople.id}`}
      style={{ width: "80px", paddingRight: "15px", textAlign: "center" }}
    >
      <DetailedPageRelatedImg
        src={
          imgDataCharacters.filter((item) => item.id === relatedPeople.id)[0]
            .src
        }
        alt={`avatar of ${relatedPeople.name}`}
      />
      <p>{relatedPeople.name}</p>
    </Link>
  );
};

export default RelatedPeople;
