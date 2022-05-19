import React from "react";

import { ownProjects } from "../data";

const OwnProjects = () => {
  return (
    <section className="ownProjects">
      <div className="container">
        <h2 className="title ownProjects__title">Own Projects</h2>
        <View data={ownProjects} />
      </div>
    </section>
  );
};

const View = ({ data }) => {
  return (
    <ul className="ownProjects__list">
      {data.map(({ id, title, img, descr }) => {
        return (
          <li key={id} className="ownProjects__item">
            <div className="ownProjects__img">
              <img src={img} alt={title} />
            </div>
            <h3 className="subtitle ownProjects__subtitle">{title}</h3>
            <p className="text ownProjects__text">{descr}</p>
            <a href="#" className="card__btn">
              Vew Demo
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default OwnProjects;
