import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id='contact' className="footer">
      <div className="footer-container">
        {/* Column 1: Logo + tagline */}
        <div className="footer-column">
          <div className="footer-logo">
            <div className="logo-circle-f">ምኣ</div>
            <span className="brand-name-1">ምዓም ኣምበሳ</span>
          </div>
          <p>Bringing authentic Tigrayan cuisine to your doorstep with love and tradition.</p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="footer-column">
          <h4>Contact Info</h4>
          <p><FontAwesomeIcon icon={faPhone} /> +251 914 123 456</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> info@miamambesa.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Mekelle, Tigray, Ethiopia</p>
        </div>

        {/* Column 3: Opening Hours */}
        <div className="footer-column">
          <h4>Opening Hours</h4>
          <p>Monday - Friday: 8:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 11:00 PM</p>
        </div>

        {/* Column 4: Socials */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© 2025 ምዓም ኣምበሳ. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
