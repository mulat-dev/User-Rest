import React from 'react';
import './TabContent.css';
const AboutTab = () => {
  return (
    <div className="tab-content">
      <h3>About This App</h3>

      <p>
        <strong>ምዓም ኣምበሳ 🍽️</strong> is a beautifully crafted restaurant platform
        made with ❤️ in Tigray. It lets users explore menus, order delicious dishes, and enjoy smooth UI.
      </p>

      <div className="about-details">
        <p><strong>Version:</strong> 1.0.0</p>
        <p><strong>Built by:</strong> Mulat Tesfay</p>
        <p><strong>Technology:</strong> React, CSS, FontAwesome</p>
      </div>

      <p style={{ marginTop: '1.5rem' }}>
        Thank you for supporting local businesses and the spirit of Tigray 🇹🇬.
      </p>
    </div>
  );
};

export default AboutTab;
