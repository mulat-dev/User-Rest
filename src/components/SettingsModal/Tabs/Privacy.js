import React from 'react';
import './TabContent.css';
const PrivacyTab = () => {
  return (
    <div className="tab-content">
      <h3>Privacy Settings</h3>

      <div className="privacy-option">
        <input type="checkbox" id="track" />
        <label htmlFor="track">Allow usage tracking to improve experience</label>
      </div>

      <div className="privacy-option">
        <input type="checkbox" id="notifications" />
        <label htmlFor="notifications">Receive order status notifications</label>
      </div>
    </div>
  );
};

export default PrivacyTab;
