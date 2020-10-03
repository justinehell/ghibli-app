import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ linkTo, category, title }) => {
  let detailedPageNav;
  if (!title && !linkTo) {
    detailedPageNav = <h1>&nbsp;/&nbsp;{category}</h1>;
  } else {
    detailedPageNav = (
      <>
        <Link to={linkTo} style={{ display: "flex" }}>
          <h1 style={{ color: "white" }}>&nbsp;/&nbsp;</h1>
          <h1>{category}&nbsp;</h1>
        </Link>
        <h1>/ {title}</h1>
      </>
    );
  }

  return (
    <>
      <div className="flex wrap letter-spacing-2">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        {detailedPageNav}
      </div>
    </>
  );
};

export default NavBar;
