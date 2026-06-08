import React, { useState } from "react";
import "./SettingsModal.css";
import General from "./Tabs/General";
import AppearanceTab from "./Tabs/AppearanceTab";
import LanguageTab from "./Tabs/Language";
import PrivacyTab from "./Tabs/Privacy";
import OrderHistoryTab from "./Tabs/OrderHistory";
import AboutTab from "./Tabs/AboutTab";

const tabKeys = [
  { id: "General", label: "general" },
  { id: "Appearance", label: "appearance" },
  { id: "Language", label: "languageRegion" },
  { id: "Privacy", label: "privacy" },
  { id: "Order History", label: "orderHistory" },
  { id: "About", label: "about" },
];

const SettingsModal = ({
  onClose,
  settings,
  onSettingsChange,
  onClearData,
  onAccountClick,
  onLogout,
  currentUser,
  orderHistory,
  formatPrice,
  formatDate,
  t,
}) => {
  const [activeTab, setActiveTab] = useState("General");

  const renderTabContent = () => {
    switch (activeTab) {
      case "General":
        return (
          <General
            settings={settings}
            onSettingsChange={onSettingsChange}
            onClearData={onClearData}
            onAccountClick={onAccountClick}
            currentUser={currentUser}
            t={t}
          />
        );
      case "Appearance":
        return (
          <AppearanceTab
            darkMode={settings.darkMode}
            fontSize={settings.fontSize}
            onSettingsChange={onSettingsChange}
            t={t}
          />
        );
      case "Language":
        return (
          <LanguageTab
            language={settings.language}
            region={settings.region}
            onSettingsChange={onSettingsChange}
            t={t}
          />
        );
      case "Privacy":
        return (
          <PrivacyTab
            trackingEnabled={settings.trackingEnabled}
            notificationsEnabled={settings.notificationsEnabled}
            onSettingsChange={onSettingsChange}
            t={t}
          />
        );
      case "Order History":
        return (
          <OrderHistoryTab
            orders={orderHistory}
            formatPrice={formatPrice}
            formatDate={formatDate}
            t={t}
          />
        );
      case "About":
        return <AboutTab t={t} />;
      default:
        return null;
    }
  };

  return (
    <div className="settings-overlay">
      <div className="settings-container">
        <div className="settings-header">
          <h2>{t("settings")}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close settings">
            x
          </button>
        </div>

        <div className="settings-tabs">
          {tabKeys.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {t(tab.label)}
            </button>
          ))}
        </div>

        <div className="settings-body">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default SettingsModal;
