import React, { useState } from 'react';
import './TabContent.css'; 

const LanguageTab = () => {
  const [language, setLanguage] = useState('English');
  const [region, setRegion] = useState('Tigray, Ethiopia');

  return (
    <div className="tab-content">
      <h3>Language & Region</h3>

      <div className="section">
        <p className="label">Language</p>
        <select
          className="select-input"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Tigrigna">Tigrigna</option>
          <option value="Amharic">Amharic</option>
        </select>
      </div>

      <div className="section">
        <p className="label">Region</p>
        <select
          className="select-input"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="Tigray, Ethiopia">Tigray, Ethiopia</option>
          <option value="Addis Ababa, Ethiopia">Addis Ababa, Ethiopia</option>
          <option value="Adigrat, Ethiopia">Adigrat, Ethiopia</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageTab;
