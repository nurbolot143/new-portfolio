import React from "react";

import myPhoto2 from "../assets/images/myPhoto2.jpg";
import Skills from "../components/Skills";
import { aboutMe } from "../data";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__info">
        <div className="container">
          <h1 className="title aboutMe__title">About me </h1>
          <div className="aboutMe__inner">
            <div className="aboutMe__img">
              <img src={myPhoto2} alt="MyPhoto" />
            </div>

            <div className="aboutMe__body">
              <p className="text aboutMe__text">{aboutMe}</p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default AboutMe;
