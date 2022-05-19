import React from "react";
import Intro from "../components/Intro";

import myPhoto from "../assets/images/myPhoto.jpg";
import { ownProjects } from "../data";
import { Link } from "react-router-dom";

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
              <Link className="card__btn" to="/aboutme">
                Lear more
              </Link>
            </div>
          </div>
        </div>

        <div className="home__projects">
          <h2 className="title home__title">Projects</h2>

          <ul className="home__list">
            {ownProjects.map(({ id, title, img }) => {
              return (
                <li key={id} className="projects__item">
                  <a href="#" className="projects__link">
                    <img src={img} alt={title} />
                    <span>View</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <Link to="/projects" className="card__btn">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
