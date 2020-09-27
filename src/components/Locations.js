import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import imgDataLocations from "./../data/imgDataLocations";
import PageContainer from "./../styledComponents/ListOfCharacters/PageContainer";
import ElementPerPage from "./../styledComponents/ListOfCharacters/ElementPerPage";
import CardStyle from "./../styledComponents/ListOfCharacters/CardStyle";
import CardImageStyle from "./../styledComponents/ListOfCharacters/CardImageStyle";
import NavBar from "./NavBar";

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
      <div className="margin-auto width-80 flex space-between items-center">
        <NavBar category="Locations" />
        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={locations.length}
          paginate={paginate}
        />
      </div>

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
