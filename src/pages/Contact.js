import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="title contact__title">Контакты</h1>
        <ul className="contact__list">
          <li className="card contact__item">
            <div className="contact__descr">
              <PhoneIcon fontSize="large" className="contact__icon" />
              Phone
            </div>
            <a href="tel:+996794690533" target="_blank">
              Позвонить
            </a>
          </li>
          <li className="card contact__item">
            <div className="contact__descr">
              <EmailIcon fontSize="large" className="contact__icon" /> Email
            </div>
            <a href="mailto:nurbolot.boobekovv@gmail.com" target="_blank">
              nurbolot.boobekovv@gmail.com
            </a>
          </li>
          <li className="card contact__item">
            <div className="contact__descr">
              <TelegramIcon fontSize="large" className="contact__icon" />
              Telegram
            </div>
            <a href="https://telegram.me/Nurbolo08300613" target="_blank">
              Написать
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
