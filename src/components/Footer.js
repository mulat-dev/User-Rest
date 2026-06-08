import React from "react";
import "./Footer.css";
import logoImage from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ t }) => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-column footer-brand-column">
          <a className="footer-logo" href="#home" aria-label="Chanolly Noodles home">
            <img className="footer-logo-image" src={logoImage} alt="Chanolly Noodles" />
          </a>
          <p>{t("footerTagline")}</p>
        </div>

        <div className="footer-column">
          <h4>{t("contactInfo")}</h4>
          <p><FontAwesomeIcon icon={faPhone} /> +251 914 123 456</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> hello@chanollynoodles.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Addis Ababa, Ethiopia</p>
        </div>

        <div className="footer-column">
          <h4>{t("openingHours")}</h4>
          <p>{t("weekdayHours")}</p>
          <p>{t("weekendHours")}</p>
        </div>

        <div className="footer-column">
          <h4>{t("followUs")}</h4>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">{t("copyright")}</p>
    </footer>
  );
};

export default Footer;
