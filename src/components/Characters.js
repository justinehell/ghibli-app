import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import imgDataCharacters from "./../data/imgDataCharacters";
import findImageById from "../findImageById";
import PageContainer from "../styledComponents/ListOfCardsPage/PageContainer";
import ElementPerPage from "../styledComponents/ListOfCardsPage/ElementPerPage";
import CardStyle from "../styledComponents/ListOfCardsPage/CardStyle";
import CardImageStyle from "../styledComponents/ListOfCardsPage/CardImageStyle";
import NavBar from "./NavBar";
import NavStyle from "../styledComponents/NavStyle";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);

  const fetchPeople = async () => {
    const data = await fetch("https://ghibliapi.herokuapp.com/people");
    const peopleData = await data.json();
    setCharacters(peopleData);
    setLoading(false);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  // Get current elements = characters
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = characters.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <NavStyle>
        <NavBar category="Characters" />

        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={characters.length}
          paginate={paginate}
        />
      </NavStyle>

      <PageContainer>
        {currentElements.map((character) => (
          <ElementPerPage key={character.id}>
            <Link to={`/people/${character.id}`}>
              <CardStyle>
                <CardImageStyle
                  src={findImageById(imgDataCharacters, character.id)}
                  alt={character.name}
                ></CardImageStyle>
                <span>{character.name}</span>
              </CardStyle>
            </Link>
          </ElementPerPage>
        ))}
      </PageContainer>
    </div>
  );
}

export default Characters;
