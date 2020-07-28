import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import imgDataSpecies from "./../data/imgDataSpecies";
import PageContainer from "./../styledComponents/PageContainer";
import ElementPerPage from "./../styledComponents/ElementPerPage";
import CardStyle from "./../styledComponents/CardStyle";
import CardImageStyle from "./../styledComponents/CardImageStyle";

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
    <div className="">
      <div className="margin-auto width-80 flex space-between items-center">
        <div className="flex space-around">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <h1>&nbsp;/&nbsp;</h1>
          <h1>Species</h1>
        </div>
        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={species.length}
          paginate={paginate}
        />
      </div>
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
