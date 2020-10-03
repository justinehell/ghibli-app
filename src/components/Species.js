import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import imgDataSpecies from "./../data/imgDataSpecies";
import PageContainer from "./../styledComponents/ListOfCardsPage/PageContainer";
import ElementPerPage from "./../styledComponents/ListOfCardsPage/ElementPerPage";
import CardStyle from "./../styledComponents/ListOfCardsPage/CardStyle";
import CardImageStyle from "./../styledComponents/ListOfCardsPage/CardImageStyle";
import NavBar from "./NavBar";
import NavStyle from "../styledComponents/NavStyle";

function Species() {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);

  const fetchSpecies = async () => {
    const data = await fetch("https://ghibliapi.herokuapp.com/species");
    const speciesData = await data.json();
    setSpecies(speciesData);
    setLoading(false);
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  // Get current elements = species
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = species.slice(
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
        <NavBar category="Species" />
        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={species.length}
          paginate={paginate}
        />
      </NavStyle>

      <PageContainer>
        {currentElements.map((eachSpecies) => (
          <ElementPerPage key={eachSpecies.id}>
            <Link to={`/species/${eachSpecies.id}`}>
              <CardStyle>
                <CardImageStyle
                  src={
                    imgDataSpecies.filter(
                      (item) => item.id === eachSpecies.id
                    )[0].src
                  }
                  alt="speciesImg"
                ></CardImageStyle>
                <span>{eachSpecies.name}</span>
              </CardStyle>
            </Link>
          </ElementPerPage>
        ))}
      </PageContainer>
    </div>
  );
}

export default Species;
