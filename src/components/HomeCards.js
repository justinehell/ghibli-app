import React from "react";
import { Link } from "react-router-dom";

function HomeCards({ categoryName, categoryImg, pathLink }) {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div
      className="homeCard"
      style={{
        backgroundImage: `url(${categoryImg})`,
        backgroundSize: "cover",
      }}
    >
      <Link style={linkStyle} to={pathLink}>
        <div className="homeCardHeader">
          <p className="homeCardTitle">{categoryName}</p>
        </div>
      </Link>
    </div>
  );
}

export default HomeCards;
