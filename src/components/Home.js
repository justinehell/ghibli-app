import React from "react";
import PeopleCategory from "./../images/categories/people.jpg";
import FilmsCategory from "./../images/categories/films.jpg";
import LocationsCategory from "./../images/categories/locations.jpg";
import SpeciesCategory from "./../images/categories/species2.jpg";
import HomeCards from "./HomeCards";
import { Link } from "react-router-dom";

function Home() {
  let categories = [
    {
      id: 1,
      categoryImg: PeopleCategory,
      categoryName: "Characters",
      pathLink: "/people",
    },
    {
      id: 2,
      categoryImg: FilmsCategory,
      categoryName: "Films",
      pathLink: "/films",
    },
    {
      id: 3,
      categoryImg: LocationsCategory,
      categoryName: "Locations",
      pathLink: "/locations",
    },
    {
      id: 4,
      categoryImg: SpeciesCategory,
      categoryName: "Species",
      pathLink: "/species",
    },
  ];
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="homeContainer">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="homeCard"
          style={{
            backgroundImage: `url(${cat.categoryImg})`,
            backgroundSize: "cover",
          }}
        >
          <Link to={cat.pathLink} style={linkStyle}>
            <HomeCards categoryName={cat.categoryName} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
