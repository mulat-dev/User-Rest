import React from "react";
import "./TabContent.css";

const AppearanceTab = ({ darkMode, fontSize, onSettingsChange, t }) => {
  return (
    <div className="tab-content">
      <h3>{t("appearance")}</h3>

      <div className="section">
        <p className="label">{t("theme")}</p>
        <div className="theme-options">
          <button
            type="button"
            className={`theme-box ${!darkMode ? "active" : ""}`}
            onClick={() => onSettingsChange({ darkMode: false })}
          >
            <span aria-hidden="true">Sun</span>
            <p>{t("light")}</p>
          </button>
          <button
            type="button"
            className={`theme-box ${darkMode ? "active" : ""}`}
            onClick={() => onSettingsChange({ darkMode: true })}
          >
            <span aria-hidden="true">Moon</span>
            <p>{t("dark")}</p>
          </button>
        </div>
      </div>

      <div className="section">
        <p className="label">{t("fontSize")}</p>
        <div className="font-options">
          <button
            type="button"
            className={fontSize === "small" ? "active" : ""}
            onClick={() => onSettingsChange({ fontSize: "small" })}
          >
            {t("small")}
          </button>
          <button
            type="button"
            className={fontSize === "normal" ? "active" : ""}
            onClick={() => onSettingsChange({ fontSize: "normal" })}
          >
            {t("normal")}
          </button>
          <button
            type="button"
            className={fontSize === "large" ? "active" : ""}
            onClick={() => onSettingsChange({ fontSize: "large" })}
          >
            {t("large")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppearanceTab;
