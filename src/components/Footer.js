import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__sociol">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#">
                <GitHubIcon fontSize="large" className="footer__icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedInIcon fontSize="large" className="footer__icon" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__info">
          <p>&copy; Nurbolot Boobekov. {currentYear}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
