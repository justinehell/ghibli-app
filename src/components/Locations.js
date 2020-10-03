import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import imgDataLocations from "./../data/imgDataLocations";
import PageContainer from "./../styledComponents/ListOfCardsPage/PageContainer";
import ElementPerPage from "./../styledComponents/ListOfCardsPage/ElementPerPage";
import CardStyle from "./../styledComponents/ListOfCardsPage/CardStyle";
import CardImageStyle from "./../styledComponents/ListOfCardsPage/CardImageStyle";
import NavBar from "./NavBar";
import NavStyle from "../styledComponents/NavStyle";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(8);

  const fetchLocations = async () => {
    const data = await fetch("https://ghibliapi.herokuapp.com/locations");
    const locationsData = await data.json();
    setLocations(locationsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // Get current elements = locations
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = locations.slice(
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
        <NavBar category="Locations" />
        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={locations.length}
          paginate={paginate}
        />
      </NavStyle>

      <PageContainer>
        {currentElements.map((location) => (
          <ElementPerPage key={location.id}>
            <Link to={`/locations/${location.id}`}>
              <CardStyle>
                <CardImageStyle
                  src={
                    imgDataLocations.filter(
                      (item) => item.id === location.id
                    )[0].src
                  }
                  alt="locationImg"
                ></CardImageStyle>
                <span>{location.name}</span>
              </CardStyle>
            </Link>
          </ElementPerPage>
        ))}
      </PageContainer>
    </div>
  );
}

export default Locations;
