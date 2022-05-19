import React from "react";

import projectImg from "../assets/images/project1.png";

const projects = [
  {
    id: 0,
    title: "Weather App",
    img: projectImg,
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusperferendis a harum quia rerum, laudantium, deleniti mollitianecessitatibus ea unde obcaecati ducimus voluptas quis, architectoreiciendis ut magnam maxime accusantium.",
  },
  {
    id: 1,
    title: "To-do List",
    img: projectImg,
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusperferendis a harum quia rerum, laudantium, deleniti mollitianecessitatibus ea unde obcaecati ducimus voluptas quis, architectoreiciendis ut magnam maxime accusantium.",
  },
  {
    id: 2,
    title: "Git profiles",
    img: projectImg,
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusperferendis a harum quia rerum, laudantium, deleniti mollitianecessitatibus ea unde obcaecati ducimus voluptas quis, architectoreiciendis ut magnam maxime accusantium.",
  },
];

const OwnProjects = () => {
  return (
    <section className="ownProjects">
      <div className="container">
        <h2 className="title ownProjects__title">Own Projects</h2>
        <View data={projects} />
      </div>
    </section>
  );
};

const View = ({ data }) => {
  return (
    <ul className="ownProjects__list">
      {data.map(({ id, title, img, descr }) => {
        return (
          <li key={id} className="projects__item ownProjects__item">
            <a href="#" className="projects__link">
              <img src={img} alt={title} />
              <span>View</span>
            </a>
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
