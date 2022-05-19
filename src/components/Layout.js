import React from "react";

import layoutImg from "../assets/images/project1.png";

const layoutItems = [
  { id: 0, link: "#", title: "Screeno", img: layoutImg },
  { id: 1, link: "#", title: "Screeno", img: layoutImg },
  { id: 2, link: "#", title: "Screeno", img: layoutImg },
  { id: 3, link: "#", title: "Screeno", img: layoutImg },
  { id: 4, link: "#", title: "Screeno", img: layoutImg },
  { id: 5, link: "#", title: "Screeno", img: layoutImg },
  { id: 6, link: "#", title: "Screeno", img: layoutImg },
];

const Layout = () => {
  return (
    <section className="layout">
      <h2 className="title layout__title">Верстка макетов</h2>
      <ul className="layout__list">
        {layoutItems.map(({ id, link, title, img }) => {
          return (
            <li key={id} className="layout__item">
              <a href={link}>
                <img src={img} alt={title} />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Layout;
