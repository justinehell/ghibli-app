import React from "react";
import BackgroudDiv from "../styledComponents/Dialog/BackgroundDiv";
import ModalDiv from "../styledComponents/Dialog/ModalDiv";
import ContentDiv from "../styledComponents/Dialog/ContentDiv";

function Dialog(props) {
  const styledBtn = {
    padding: "10px",
    borderRadius: "2px",
    backgroundColor: "gray",
    right: "0",
    color: "white",
  };

  return (
    <BackgroudDiv>
      <ModalDiv>
        <ContentDiv>What is this?</ContentDiv>
        <br></br>
        <hr />
        <br></br>
        <div style={{ fontSize: "0.8em" }}>
          A React app developed using the Ghibli API to display basic
          information about Studio Ghibli characters, films, locations, species
          and their relations. Everything is click based, so you can use it as a
          visual guide to help remember all the magical univers of Ghibli
          movies. I had fun building this app, it helped me practice and learn
          how ReactJS works.
        </div>
        <br></br>
        <br></br>
        <ContentDiv important>Where does the information come from?</ContentDiv>
        <br></br>
        <hr />
        <br></br>
        <div style={{ fontSize: "0.8em" }}>
          This app utilizes the Ghibli API (at{" "}
          <a href=" https://ghibliapi.herokuapp.com" target="_blank">
            ghibliapi
          </a>
          ), so the unkown information displayed as "No data" in this app will
          be updated as the API is updated. As for the pictures, they were
          freely collected from Ghibli Wiki. Studio Ghibli and all associated
          names and/or images are copyright Studio Ghibli.
        </div>
        <br></br>
        <br></br>
        <ContentDiv>Notice a bug or have improvment ideas?</ContentDiv>
        <br></br>
        <hr />
        <br></br>
        <div style={{ fontSize: "0.8em" }}>
          Please, if you notice something weird with the website, let me know by
          sending an email at hell.justine@gmail.com. The same goes for site
          improvements and/or ideas. This app was greatly inspired by the "Star
          Wars - A visual Guide" website created by TIM SARVEY. You can visit
          his amazing work{" "}
          <a href=" https://starwars-visualguide.com/#/" target="_blank">
            here
          </a>
          .<br></br>
          Thanks!
        </div>
        <br></br>
        <br></br>
        <button style={styledBtn} onClick={props.onClose}>
          CLOSE
        </button>
      </ModalDiv>
    </BackgroudDiv>
  );
}

export default Dialog;
