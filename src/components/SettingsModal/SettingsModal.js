import React, { useState } from 'react';
import './SettingsModal.css';
import General from './Tabs/General';
import AppearanceTab from './Tabs/AppearanceTab';
import LanguageTab from './Tabs/Language';
import PrivacyTab from './Tabs/Privacy';
import OrderHistoryTab from './Tabs/OrderHistory';
import AboutTab from './Tabs/AboutTab';

const tabs = ['General', 'Appearance', 'Language', 'Privacy', 'Order History', 'About'];

const SettingsModal = ({ onClose, darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState('General');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return <General />;
      case 'Appearance':
        return <AppearanceTab darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'Language':
        return <LanguageTab />;
      case 'Privacy':
        return <PrivacyTab />;
      case 'Order History':
        return <OrderHistoryTab />;
      case 'About':
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <div className="settings-overlay">
      <div className="settings-container">
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="settings-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="settings-body">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
