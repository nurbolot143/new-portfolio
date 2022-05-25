import React from "react";
import Intro from "../components/Intro";

import myPhoto2 from "../assets/images/myPhoto2.jpg";
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
              <img src={myPhoto2} alt="Photo" />
            </div>
            <div className="card__body">
              <h3 className="subtitle card__title">Обо мне</h3>
              <p className="text card__text">
                Более года увлекаюсь программированием, прошел онлайн курс по
                front-end разработке в Jyldyz Academy, прохожу обучающие
                программы, смотрю видеоролики, параллельно разрабатываю
                мини-проекты...
              </p>
              <Link className="card__btn" to="/aboutme">
                Узнать больше
              </Link>
            </div>
          </div>
        </div>

        <div className="home__projects">
          <h2 className="title home__title">Проекты</h2>

          <ul className="home__list">
            {ownProjects.map(({ id, title, link, img }) => {
              return (
                <li key={id} className="projects__item">
                  <a href={link} className="projects__link" target="_blank">
                    <img src={img} alt={title} />
                    <span>{title}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <Link to="/projects" className="card__btn">
            Все проекты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
