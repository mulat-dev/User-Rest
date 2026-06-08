// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css";
import logoImage from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUserPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({
  cartCount,
  onCartClick,
  onLoginClick,
  onOrderClick,
  t,
  currentUser,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header sticky">
        <div className="header-container">
          <a className="logo" href="#home" aria-label="Chanolly Noodles home">
            <img className="logo-image" src={logoImage} alt="Chanolly Noodles" />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <nav className="nav-links">
            <a href="#home">{t("navHome")}</a>
            <a href="#menu">{t("navMenu")}</a>
            <a href="#about">{t("navAbout")}</a>
            <a href="#contact">{t("navContact")}</a>
          </nav>

          <div className="right-side">
            <button className="order-btn" onClick={onOrderClick}>
              {t("orderNow")}
            </button>

            <div className="guest">
              <button className="signup-btn" onClick={onLoginClick}>
                <FontAwesomeIcon icon={faUserPlus} />{" "}
                {currentUser ? currentUser.fullName.split(" ")[0] : t("signUp")}
              </button>
            </div>

            <button className="cart-btn" onClick={onCartClick}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-drawer">
            <div className="drawer-header">
              <a
                className="logo"
                href="#home"
                aria-label="Chanolly Noodles home"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img className="logo-image" src={logoImage} alt="Chanolly Noodles" />
              </a>
              <button
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <nav className="drawer-nav">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                {t("navHome")}
              </a>
              <a href="#menu" onClick={() => setMobileMenuOpen(false)}>
                {t("navMenu")}
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                {t("navAbout")}
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                {t("navContact")}
              </a>
              <hr />
              <button
                className="signup-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLoginClick();
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} />{" "}
                {currentUser ? currentUser.fullName.split(" ")[0] : t("signUp")}
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
