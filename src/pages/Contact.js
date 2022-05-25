import React from "react";
import { contact } from "../data";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="title contact__title">Контакты</h1>
        <ul className="contact__list">
          {contact.map(({ id, name, label, link, icon }) => {
            return (
              <li key={id} className="card contact__item">
                <div className="contact__descr">
                  {icon} {name}
                </div>
                <a href={link} target="_blank">
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
