import React from 'react';
import './TabContent.css';

const General = () => {
  return (
    <div className="tab-content">
      <h3>General Settings</h3>

      <label>Currency</label>
      <select className="input-field">
        <option>Ethiopian Birr (ETB)</option>
        <option>British Pound (GBP)</option>
        <option>US Dollar (USD)</option>
        <option>Euro (EUR)</option>
      </select>

      <label>Account</label>
      <div className="account-link">
        <i className="fas fa-user-circle"></i> Account Settings
      </div>

      <label>Data</label>
      <button className="clear-btn">
        <i className="fas fa-trash"></i> Clear All Data
      </button>
    </div>
  );
};

export default General;
