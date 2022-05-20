import React from "react";

import myPhoto2 from "../assets/images/myPhoto2.jpg";
import Skills from "../components/Skills";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__info">
        <div className="container">
          <div className="aboutMe__inner">
            <div className="aboutMe__img">
              <img src={myPhoto2} alt="MyPhoto" />
            </div>

            <div className="aboutMe__body">
              <h1>Nurbolot Boobekov</h1>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                eos sunt nam fugit beatae porro laboriosam explicabo, accusamus
                obcaecati amet quisquam earum sequi inventore iusto! Nostrum
                iure placeat dolore accusamus? Porro est quos nemo animi
                praesentium amet accusantium, eaque commodi facere quod totam
                recusandae unde maiores. Ad ipsam dolores similique suscipit
                labore omnis corrupti dolor, quibusdam odit distinctio
                laudantium porro.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default AboutMe;
