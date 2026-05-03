import React from "react";
import "./AboutUs.css";

const AboutUs = ({ t }) => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">{t("aboutUsTitle")}</h2>
        <p className="about-text">{t("aboutUsBody")}</p>
      </div>
    </section>
  );
};

export default AboutUs;
