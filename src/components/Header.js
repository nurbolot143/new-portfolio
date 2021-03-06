import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const body = document.querySelector("body");

  const navItems = [
    { id: 0, label: "главная", to: "/" },
    { id: 1, label: "обо мне", to: "/aboutme" },
    { id: 2, label: "проекты", to: "/projects" },
    { id: 3, label: "контакты", to: "/contact" },
  ];

  const onActiveFalse = () => {
    setIsActive(false);
    body.classList.remove("body-lock");
  };

  const onActiveToggle = () => {
    setIsActive((active) => !active);
    body.classList.toggle("body-lock");
  };

  const addActiveClass = (relativeClass) =>
    isActive ? `${relativeClass} ${relativeClass}_active` : relativeClass;

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="logo" to="/" onClick={onActiveFalse}>
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
                      onClick={onActiveFalse}
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "4px solid #f3c26b" : "none",
                      })}
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
            onClick={onActiveToggle}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
