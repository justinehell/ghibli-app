import React from "react";

function Footer() {
  return (
    <div
      className="min-width text-center bg-ivory font-bold"
      style={{
        padding: "20px",
      }}
    >
      <div className="flex space-around pt-20 pb-20 flex-wrap white">
        <div>
          FOLLOW ME :{" "}
          <a href="https://www.linkedin.com/in/justinehell/" target=" _blank">
            <i className="fab fa-linkedin"></i> Linkedin
          </a>{" "}
          -{" "}
          <a href="https://github.com/justinehell" target=" _blank">
            <i className="fab fa-github-square"></i> Github
          </a>
        </div>
        <div>
          DESIGNED AND DEVELOPED BY{" "}
          <a href="https://justinehell.fr/" target=" _blank">
            JUSTINE HELL
          </a>{" "}
          ©2020, INSPIRED BY{" "}
          <a href="https://sarvey-webdev.com/" target=" _blank">
            TIM SARVEY
          </a>
        </div>
      </div>
      <div className="font-small white">
        Studio Ghibli and all associated names and/or images are copyright
        Studio Ghibli. Images were freely collected from{" "}
        <a
          href=" https://ghibli.fandom.com/fr/wiki/Wiki_Studio_Ghibli"
          target="_blank"
        >
          Ghibli Wiki
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;
