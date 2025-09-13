// src/components/AuthModal.jsx
import React, { useState } from "react";
import "./AuthModal.css"; // You can rename this to AuthModal.css if preferred
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false); // Start with Register

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="login-backdrop">
      <div className="login-modal">
        <div className="login-header">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <button onClick={onClose} className="clos-btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {isLogin ? (
          <form className="login-form">
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
            <button type="submit" className="primary-btn">
              Login
            </button>
            <p className="form-footer">
              Don’t have an account?{" "}
              <button type="button" onClick={toggleForm} className="link-btn">
                Register
              </button>
            </p>
          </form>
        ) : (
          <form className="login-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />

            <label>Delivery Address</label>
            <textarea
              placeholder="Enter your delivery address"
              required
              rows="2"
            />
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
            <button type="submit" className="primary-btn">
              Register
            </button>
            <p className="form-footer">
              Already have an account?{" "}
              <button type="button" onClick={toggleForm} className="link-btn">
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
