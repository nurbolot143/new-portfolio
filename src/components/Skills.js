import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="title skills__title">навыки</h2>
        <View data={skills} />
      </div>
    </section>
  );
};

const View = ({ data }) => {
  return (
    <ul className="skills__list">
      {data.map(({ id, title, descr, icon }) => {
        return (
          <li key={id} className="skills__item">
            <div className="card skills__card">
              <div className="skills__icon">
                <img src={icon} alt={title} />
              </div>
              <h2 className="skills__subtitle">{title}</h2>
              <p className="text skills__text">{descr}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
