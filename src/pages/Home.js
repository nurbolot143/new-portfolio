import React from "react";
import Intro from "../components/Intro";

import myPhoto from "../assets/images/myPhoto.jpg";
import projectPhoto from "../assets/images/project1.png";

const projects = [projectPhoto, projectPhoto, projectPhoto];

const Home = () => {
  return (
    <div className="home">
      <Intro />

      <div className="container">
        <div className="home__about" id="aboutme">
          <div className="card home__card">
            <div className="card__img">
              <img src={myPhoto} alt="Photo" />
            </div>
            <div className="card__body">
              <h3 className="subtitle card__title">About me</h3>
              <p className="text card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                aliquam veniam illo corporis tenetur deleniti ipsa corrupti
                ipsum totam a autem rem, saepe voluptatibus ratione recusandae
                eveniet, sapiente labore iusto!
              </p>
              <a href="#" className="card__btn">
                Lear more
              </a>
            </div>
          </div>
        </div>

        <div className="home__projects">
          <h2 className="title home__title">Projects</h2>

          <ul className="home__list">
            {projects.map((item, idx) => {
              return (
                <li key={idx} className="home__item">
                  <a href="#">
                    <img src={item} alt="Project" />
                    <span>View</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
