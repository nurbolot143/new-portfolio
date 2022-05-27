import React from "react";

import { layoutItems } from "../data";

const Layout = () => {
  return (
    <section className="layout">
      <h2 className="title layout__title">Верстка макетов</h2>
      <ul className="layout__list">
        {layoutItems.map(({ id, link, title, img }) => {
          return (
            <li key={id} className="layout__item">
              <a href={link} target="_blank" rel="noopener noreferrer">
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
