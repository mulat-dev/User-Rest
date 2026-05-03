import React from "react";
import "./TabContent.css";

const PrivacyTab = ({ trackingEnabled, notificationsEnabled, onSettingsChange, t }) => {
  return (
    <div className="tab-content">
      <h3>{t("privacySettings")}</h3>

      <div className="privacy-option">
        <input
          type="checkbox"
          id="track"
          checked={trackingEnabled}
          onChange={(event) =>
            onSettingsChange({ trackingEnabled: event.target.checked })
          }
        />
        <label htmlFor="track">{t("tracking")}</label>
      </div>

      <div className="privacy-option">
        <input
          type="checkbox"
          id="notifications"
          checked={notificationsEnabled}
          onChange={(event) =>
            onSettingsChange({ notificationsEnabled: event.target.checked })
          }
        />
        <label htmlFor="notifications">{t("notifications")}</label>
      </div>
    </div>
  );
};

export default PrivacyTab;
