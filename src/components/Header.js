import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const navItems = [
    { id: 0, label: "home", to: "/" },
    { id: 1, label: "about me", to: "/aboutme" },
    { id: 2, label: "project", to: "/projects" },
    { id: 3, label: "contact", to: "/contact" },
  ];

  const addActiveClass = (relativeClass) =>
    isActive ? `${relativeClass} ${relativeClass}_active` : relativeClass;

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="logo" to="/">
            Boobekov N
          </Link>
          <nav className={addActiveClass("nav")}>
            <ul className="nav__list">
              {navItems.map(({ id, label, to }) => {
                return (
                  <li key={id} className="nav__item">
                    <NavLink
                      className="nav__link"
                      to={to}
                      onClick={() => setIsActive(false)}
                    >
                      {label}
                    </NavLink>
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
