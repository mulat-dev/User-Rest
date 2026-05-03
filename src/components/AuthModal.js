// src/components/AuthModal.jsx
import React, { useState } from "react";
import "./AuthModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const emptyRegisterForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  password: "",
};

const emptyLoginForm = {
  email: "",
  password: "",
};

const AuthModal = ({ onClose, onRegister, onLogin, currentUser, t }) => {
  const [isLogin, setIsLogin] = useState(Boolean(currentUser));
  const [registerForm, setRegisterForm] = useState(emptyRegisterForm);
  const [loginForm, setLoginForm] = useState(emptyLoginForm);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setFeedback("");
    setFeedbackType("");
  };

  const updateRegisterForm = (field, value) => {
    setRegisterForm((current) => ({ ...current, [field]: value }));
  };

  const updateLoginForm = (field, value) => {
    setLoginForm((current) => ({ ...current, [field]: value }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (Object.values(registerForm).some((value) => !value.trim())) {
      setFeedback(t("fillAllFields"));
      setFeedbackType("error");
      return;
    }

    if (registerForm.password.trim().length < 6) {
      setFeedback(t("passwordTooShort"));
      setFeedbackType("error");
      return;
    }

    const result = onRegister(registerForm);
    setFeedback(result.message);
    setFeedbackType(result.ok ? "success" : "error");

    if (result.ok) {
      setRegisterForm(emptyRegisterForm);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!loginForm.email.trim() || !loginForm.password.trim()) {
      setFeedback(t("fillAllFields"));
      setFeedbackType("error");
      return;
    }

    const result = onLogin(loginForm);
    setFeedback(result.message);
    setFeedbackType(result.ok ? "success" : "error");

    if (result.ok) {
      setLoginForm(emptyLoginForm);
    }
  };

  return (
    <div className="login-backdrop">
      <div className="login-modal">
        <div className="login-header">
          <h2>{isLogin ? t("login") : t("register")}</h2>
          <button onClick={onClose} className="clos-btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {feedback && <p className={`auth-feedback ${feedbackType}`}>{feedback}</p>}

        {isLogin ? (
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder={t("enterEmail")}
              value={loginForm.email}
              onChange={(event) => updateLoginForm("email", event.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t("enterPassword")}
              value={loginForm.password}
              onChange={(event) => updateLoginForm("password", event.target.value)}
              required
            />
            <button type="submit" className="primary-btn">
              {t("login")}
            </button>
            <p className="form-footer">
              {t("dontHaveAccount")}{" "}
              <button type="button" onClick={toggleForm} className="link-btn">
                {t("register")}
              </button>
            </p>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleRegister}>
            <label>{t("fullName")}</label>
            <input
              type="text"
              placeholder={t("enterFullName")}
              value={registerForm.fullName}
              onChange={(event) => updateRegisterForm("fullName", event.target.value)}
              required
            />
            <label>{t("email")}</label>
            <input
              type="email"
              placeholder={t("enterEmail")}
              value={registerForm.email}
              onChange={(event) => updateRegisterForm("email", event.target.value)}
              required
            />

            <label>{t("phoneNumber")}</label>
            <input
              type="tel"
              placeholder={t("enterPhoneNumber")}
              value={registerForm.phone}
              onChange={(event) => updateRegisterForm("phone", event.target.value)}
              required
            />

            <label>{t("deliveryAddress")}</label>
            <textarea
              placeholder={t("enterDeliveryAddress")}
              value={registerForm.address}
              onChange={(event) => updateRegisterForm("address", event.target.value)}
              required
              rows="2"
            />
            <label>{t("password")}</label>
            <input
              type="password"
              placeholder={t("createPassword")}
              value={registerForm.password}
              onChange={(event) => updateRegisterForm("password", event.target.value)}
              required
            />
            <button type="submit" className="primary-btn">
              {t("register")}
            </button>
            <p className="form-footer">
              {t("alreadyHaveAccount")}{" "}
              <button type="button" onClick={toggleForm} className="link-btn">
                {t("login")}
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
