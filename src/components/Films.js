import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import imgDataFilms from "./../data/imgDataFilms";
import PageContainer from "./../styledComponents/ListOfCardsPage/PageContainer";
import ElementPerPage from "./../styledComponents/ListOfCardsPage/ElementPerPage";
import CardStyle from "./../styledComponents/ListOfCardsPage/CardStyle";
import CardImageStyle from "./../styledComponents/ListOfCardsPage/CardImageStyle";
import NavBar from "./NavBar";
import NavStyle from "../styledComponents/NavStyle";

function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);

  const fetchFilms = async () => {
    const data = await fetch("https://ghibliapi.herokuapp.com/films");
    const filmsData = await data.json();
    setFilms(filmsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  // Get current elements = films
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = films.slice(indexOfFirstElement, indexOfLastElement);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <NavStyle>
        <NavBar category="Films" />
        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={films.length}
          paginate={paginate}
        />
      </NavStyle>

      <PageContainer>
        {currentElements.map((film) => (
          <ElementPerPage key={film.id}>
            <Link to={`/films/${film.id}`}>
              <CardStyle>
                <CardImageStyle
                  src={
                    imgDataFilms.filter((item) => item.id === film.id)[0].src
                  }
                  alt="filmImg"
                ></CardImageStyle>
                <span>{film.title}</span>
              </CardStyle>
            </Link>
          </ElementPerPage>
        ))}
      </PageContainer>
    </div>
  );
}

export default Films;
