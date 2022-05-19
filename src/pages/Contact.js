import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="title contact__title">Contact me</h1>
        <div className="card contact__card">
          <ul className="contact__list">
            <li className="contact__item">
              <PhoneIcon />
              <a href="tel:+996794690533" target="_blank">
                0704-69-05-33
              </a>
            </li>
            <li className="contact__item">
              <EmailIcon />
              <a href="mailto:nurbolot.boobekovv@gmail.com" target="_blank">
                nurbolot.boobekovv@gmail.com
              </a>
            </li>
            <li className="contact__item">
              <WhatsAppIcon />
              <a href="https://wa.me/+996704690533" target="_blank">
                0704-69-05-33
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
