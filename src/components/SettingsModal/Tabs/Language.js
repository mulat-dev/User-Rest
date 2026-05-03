import React from "react";
import "./TabContent.css";

const LanguageTab = ({ language, region, onSettingsChange, t }) => {
  return (
    <div className="tab-content">
      <h3>{t("languageRegion")}</h3>

      <div className="section">
        <p className="label">{t("language")}</p>
        <select
          className="select-input"
          value={language}
          onChange={(event) => onSettingsChange({ language: event.target.value })}
        >
          <option value="English">English</option>
          <option value="Tigrigna">Tigrigna</option>
          <option value="Amharic">Amharic</option>
        </select>
      </div>

      <div className="section">
        <p className="label">{t("region")}</p>
        <select
          className="select-input"
          value={region}
          onChange={(event) => onSettingsChange({ region: event.target.value })}
        >
          <option value="Addis Ababa, Ethiopia">Addis Ababa, Ethiopia</option>
          <option value="Bole, Addis Ababa">Bole, Addis Ababa</option>
          <option value="Piassa, Addis Ababa">Piassa, Addis Ababa</option>
          <option value="Adigrat, Ethiopia">Adigrat, Ethiopia</option>
        </select>
      </div>

      <p className="settings-note">{t("regionNote")}</p>
    </div>
  );
};

export default LanguageTab;
