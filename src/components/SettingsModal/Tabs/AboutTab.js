import React from "react";
import "./TabContent.css";

const AboutTab = ({ t }) => {
  return (
    <div className="tab-content">
      <h3>{t("aboutApp")}</h3>

      <p>
        <strong>Chanolly Noodles</strong> {t("aboutAppBody")}
      </p>

      <div className="about-details">
        <p><strong>{t("version")}:</strong> 1.0.0</p>
        <p><strong>{t("builtBy")}:</strong> Mulat Tesfay</p>
        <p><strong>{t("technology")}:</strong> React, CSS, FontAwesome</p>
      </div>

      <p style={{ marginTop: "1.5rem" }}>
        {t("aboutAppThanks")}
      </p>
    </div>
  );
};

export default AboutTab;
