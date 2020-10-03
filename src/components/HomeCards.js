import React from "react";

function HomeCards({ categoryName }) {
  return (
    <>
      <div className="homeCardHeader">
        <p className="homeCardTitle">{categoryName}</p>
      </div>
    </>
  );
}

export default HomeCards;
