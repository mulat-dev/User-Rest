// src/components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faShoppingCart,
  faTruck,
  faLeaf,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = ({ onExploreClick, onCartClick, t }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-image">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Chanolly Noodles</h1>
        <p className="hero-subtitle">"{t("heroSubtitle")}"</p>
        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={onExploreClick}>
            <FontAwesomeIcon icon={faUtensils} /> {t("exploreMenu")}
          </button>
          <button className="hero-btn secondary" onClick={onCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} /> {t("myCart")}
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-box">
            <div className="icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3>{t("fastDelivery")}</h3>
            <p>{t("fastDeliveryBody")}</p>
          </div>
          <div className="feature-box">
            <div className="icon-1">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3>{t("freshIngredients")}</h3>
            <p>{t("freshIngredientsBody")}</p>
          </div>
          <div className="feature-box">
            <div className="icon-2">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3>{t("topRated")}</h3>
            <p>{t("topRatedBody")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
