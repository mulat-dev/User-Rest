import React from "react";
import "./TabContent.css";

const General = ({
  settings,
  onSettingsChange,
  onClearData,
  onAccountClick,
  onLogout,
  currentUser,
  t,
}) => {
  return (
    <div className="tab-content">
      <h3>{t("generalSettings")}</h3>

      <label htmlFor="currency-select">{t("currency")}</label>
      <select
        id="currency-select"
        className="input-field"
        value={settings.currency}
        onChange={(event) => onSettingsChange({ currency: event.target.value })}
      >
        <option value="ETB">Ethiopian Birr (ETB)</option>
        <option value="GBP">British Pound (GBP)</option>
        <option value="USD">US Dollar (USD)</option>
        <option value="EUR">Euro (EUR)</option>
      </select>

      <label>{t("account")}</label>
      {currentUser ? (
        <>
          <div className="account-summary">
            <strong>{currentUser.fullName}</strong>
            <span>{currentUser.email}</span>
          </div>
          <button className="account-link" onClick={onLogout}>
            {t("signOut")}
          </button>
        </>
      ) : (
        <button className="account-link" onClick={onAccountClick}>
          {t("accountSettings")}
        </button>
      )}

      <label>{t("data")}</label>
      <button
        className="clear-btn"
        onClick={onClearData}
        type="button"
      >
        {t("clearAllData")}
      </button>
    </div>
  );
};

export default General;
