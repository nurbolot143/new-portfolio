import React, { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const navItems = ["home", "about me", "project", "contact"];

  const addActiveClass = (relativeClass) =>
    isActive ? `${relativeClass} ${relativeClass}_active` : relativeClass;

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="logo">
            Boobekov N
          </a>
          <nav className={addActiveClass("nav")}>
            <ul className="nav__list">
              {navItems.map((item, idx) => {
                return (
                  <li key={idx} className="nav__item">
                    <a className="nav__link" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={addActiveClass("header__burger")}
            onClick={() => {
              setIsActive((active) => !active);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
