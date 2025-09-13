// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUserPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartCount, onCartClick, onLoginClick, onSettingsClick, onOrderClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header sticky">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <div className="logo-circle">ምኣ</div>
            <span className="brand-name"><a href="#home">ምዓም ኣምበሳ</a></span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Desktop Navigation */}
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#!" onClick={onSettingsClick}>
              Settings
            </a>
          </nav>

          {/* Right Side */}
          <div className="right-side">
            <button className="order-btn" onClick={onOrderClick}>
              Order Now
            </button>

            {/* Guest Login */}
            <div className="guest">
              <button className="signup-btn" onClick={onLoginClick}>
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </button>
            </div>

            {/* Cart Button */}
            <button className="cart-btn" onClick={onCartClick}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-drawer">
            <div className="drawer-header">
              <div className="logo">
                <div className="logo-circle">ምኣ</div>
                <span className="brand-name">ምዓም ኣምበሳ</span>
              </div>
              <button
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <nav className="drawer-nav">
              <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#menu" onClick={() => setMobileMenuOpen(false)}>
                Menu
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a href="#!" onClick={() => setMobileMenuOpen(false)}>
                Settings
              </a>
              <hr />
              <button
                className="signup-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLoginClick(); // open login modal after closing menu
                }}
              >
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
