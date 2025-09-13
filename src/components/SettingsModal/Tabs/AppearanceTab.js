import React, { useState } from 'react';
import './TabContent.css'; 

const AppearanceTab = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('normal');

  return (
    <div className="tab-content">
      <h3>Appearance</h3>

      <div className="section">
        <p className="label">Theme</p>
        <div className="theme-options">
          <div
            className={`theme-box ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            <span role="img" aria-label="light">🌞</span>
            <p>Light</p>
          </div>
          <div
            className={`theme-box ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            <span role="img" aria-label="dark">🌙</span>
            <p>Dark</p>
          </div>
        </div>
      </div>

      <div className="section">
        <p className="label">Font Size</p>
        <div className="font-options">
          <button
            className={fontSize === 'small' ? 'active' : ''}
            onClick={() => setFontSize('small')}
          >
            Small
          </button>
          <button
            className={fontSize === 'normal' ? 'active' : ''}
            onClick={() => setFontSize('normal')}
          >
            Normal
          </button>
          <button
            className={fontSize === 'large' ? 'active' : ''}
            onClick={() => setFontSize('large')}
          >
            Large
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppearanceTab;
