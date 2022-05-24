import React from "react";
import Intro from "../components/Intro";

import myPhoto2 from "../assets/images/myPhoto2.jpg";
import { aboutMe, ownProjects } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  const aboutDescr = aboutMe.slice(0, 199) + "...";

  return (
    <div className="home">
      <Intro />

      <div className="container">
        <div className="home__about" id="aboutme">
          <div className="card home__card">
            <div className="card__img">
              <img src={myPhoto2} alt="Photo" />
            </div>
            <div className="card__body">
              <h3 className="subtitle card__title">About me</h3>
              <p className="text card__text">{aboutDescr}</p>
              <Link className="card__btn" to="/aboutme">
                Lear more
              </Link>
            </div>
          </div>
        </div>

        <div className="home__projects">
          <h2 className="title home__title">Projects</h2>

          <ul className="home__list">
            {ownProjects.map(({ id, title, link, img }) => {
              return (
                <li key={id} className="projects__item">
                  <a href={link} className="projects__link" target="_blank">
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
