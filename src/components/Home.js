import React from "react";
import PeopleCategory from "./../images/categories/people.jpg";
import FilmsCategory from "./../images/categories/films.jpg";
import LocationsCategory from "./../images/categories/locations.jpg";
import SpeciesCategory from "./../images/categories/species2.jpg";
import HomeCards from "./HomeCards";

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

  return (
    <div className="homeContainer">
      {categories.map((cat) => (
        <HomeCards
          key={cat.id}
          categoryImg={cat.categoryImg}
          categoryName={cat.categoryName}
          pathLink={cat.pathLink}
        />
      ))}
    </div>
  );
}

export default Home;
