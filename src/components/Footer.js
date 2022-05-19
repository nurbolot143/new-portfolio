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
              <a href="https://github.com/nurbolot143" target="_blank">
                <GitHubIcon fontSize="large" className="footer__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nurbolot-boobekov-1616a3232/"
                target="_blank"
              >
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
