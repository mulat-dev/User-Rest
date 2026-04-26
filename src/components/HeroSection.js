// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faTruck, faLeaf, faStar } from '@fortawesome/free-solid-svg-icons';

// ✅ Add props
const HeroSection = ({ onExploreClick, onCartClick }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-image">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Chanoly Noodles</h1>
        <p className="hero-subtitle">"Fresh Noodles,  Bold flavors"</p>
        {/* <p className="hero-desc">
          Experience the rich flavors of traditional Ethiopian injera and stews from the comfort of your home
        </p> */}

        <div className="hero-buttons">
          {/* ✅ Use onClick props */}
          <button className="hero-btn primary" onClick={onExploreClick}>
            <FontAwesomeIcon icon={faUtensils} /> Explore Menu
          </button>
          <button className="hero-btn secondary" onClick={onCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} /> My Cart
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-box">
            <div className="icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3>Fast Delivery</h3>
            <p>Quick delivery throughout Mekelle within 30 minutes</p>
          </div>
          <div className="feature-box">
            <div className="icon-1">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <h3>Fresh Ingredients</h3>
            <p>Locally sourced, organic ingredients for authentic taste</p>
          </div>
          <div className="feature-box">
            <div className="icon-2">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h3>Top Rated</h3>
            <p>Loved by customers across Mekelle with 4.9★ rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

