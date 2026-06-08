// src/App.js
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedDishes from "./components/FeaturedDishes";
import MenuSection from "./components/MenuSection";
import CartModal from "./components/CartModal";
import AuthModal from "./components/AuthModal";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import CheckoutModal from "./components/CheckOutModal";
import { createTranslator, getLocaleForLanguage } from "./i18n";
import { dishes } from "./data/menuData";
import "./App.css";

const SETTINGS_STORAGE_KEY = "chanolly-settings";
const ORDER_HISTORY_STORAGE_KEY = "chanolly-order-history";
const USERS_STORAGE_KEY = "chanolly-users";
const CURRENT_USER_STORAGE_KEY = "chanolly-current-user";
const MENU_STORAGE_KEY = "chanolly-menu";

const defaultSettings = {
  currency: "ETB",
  darkMode: false,
  fontSize: "normal",
  language: "English",
  region: "Addis Ababa, Ethiopia",
  trackingEnabled: false,
  notificationsEnabled: true,
};

const currencyConfig = {
  ETB: { label: "ETB", locale: "en-ET", rate: 1, decimals: 0 },
  USD: { label: "USD", locale: "en-US", rate: 0.018, decimals: 2 },
  EUR: { label: "EUR", locale: "de-DE", rate: 0.016, decimals: 2 },
  GBP: { label: "GBP", locale: "en-GB", rate: 0.014, decimals: 2 },
};

const fontSizeMap = {
  small: "14px",
  normal: "16px",
  large: "18px",
};

const readStoredJson = (key, fallback) => {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch (error) {
    return fallback;
  }
};

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [settings, setSettings] = useState(() =>
    readStoredJson(SETTINGS_STORAGE_KEY, defaultSettings)
  );
  const [registeredUsers, setRegisteredUsers] = useState(() =>
    readStoredJson(USERS_STORAGE_KEY, [])
  );
  const [currentUser, setCurrentUser] = useState(() =>
    readStoredJson(CURRENT_USER_STORAGE_KEY, null)
  );
  const [orderHistory, setOrderHistory] = useState(() =>
    readStoredJson(ORDER_HISTORY_STORAGE_KEY, [])
  );
  const [menuItems, setMenuItems] = useState(() =>
    readStoredJson(MENU_STORAGE_KEY, dishes)
  );

  const t = createTranslator(settings.language);

  useEffect(() => {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(ORDER_HISTORY_STORAGE_KEY, JSON.stringify(orderHistory));
  }, [orderHistory]);

  useEffect(() => {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    }
  }, [currentUser]);

  useEffect(() => {
    document.documentElement.lang =
      settings.language === "Amharic"
        ? "am"
        : settings.language === "Tigrigna"
          ? "ti"
          : "en";
  }, [settings.language]);

  useEffect(() => {
    const fontSize = fontSizeMap[settings.fontSize] || fontSizeMap.normal;
    document.documentElement.style.fontSize = fontSize;
    document.body.style.fontSize = fontSize;
  }, [settings.fontSize]);

  const updateSettings = (updates) => {
    setSettings((currentSettings) => ({
      ...currentSettings,
      ...updates,
    }));
  };

  const formatPrice = (priceInEtb) => {
    const activeCurrency = currencyConfig[settings.currency] || currencyConfig.ETB;
    const convertedPrice = priceInEtb * activeCurrency.rate;

    return new Intl.NumberFormat(activeCurrency.locale, {
      style: "currency",
      currency: activeCurrency.label,
      minimumFractionDigits: activeCurrency.decimals,
      maximumFractionDigits: activeCurrency.decimals,
    }).format(convertedPrice);
  };

  const formatDate = (value) => {
    const locale = getLocaleForLanguage(settings.language);
    const date = value ? new Date(value) : new Date();

    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const addToCart = (dish) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === dish.id);
      if (exists) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartItemQty = (id, nextQty) => {
    if (nextQty <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: nextQty } : item
      )
    );
  };

  const clearAllData = () => {
    setCartItems([]);
    setOrderHistory([]);
    setRegisteredUsers([]);
    setCurrentUser(null);
    setSettings(defaultSettings);
    localStorage.removeItem(SETTINGS_STORAGE_KEY);
    localStorage.removeItem(ORDER_HISTORY_STORAGE_KEY);
    localStorage.removeItem(USERS_STORAGE_KEY);
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    localStorage.removeItem(MENU_STORAGE_KEY);
    setMenuItems(dishes);
    setShowCheckout(false);
    setCartOpen(false);
  };

  const registerUser = (userDetails) => {
    const email = userDetails.email.trim().toLowerCase();
    const phone = userDetails.phone.trim();

    if (registeredUsers.some((user) => user.email === email)) {
      return {
        ok: false,
        message: t("emailAlreadyRegistered"),
      };
    }

    const newUser = {
      id: `USER${Date.now()}`,
      fullName: userDetails.fullName.trim(),
      email,
      phone,
      address: userDetails.address.trim(),
      password: userDetails.password,
    };

    setRegisteredUsers((currentUsers) => [...currentUsers, newUser]);
    setCurrentUser(newUser);
    setShowLogin(false);

    return {
      ok: true,
      message: t("registerSuccess"),
      user: newUser,
    };
  };

  const loginUser = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const matchedUser = registeredUsers.find(
      (user) => user.email === normalizedEmail && user.password === password
    );

    if (!matchedUser) {
      return {
        ok: false,
        message: t("invalidCredentials"),
      };
    }

    setCurrentUser(matchedUser);
    setShowLogin(false);

    return {
      ok: true,
      message: t("loginSuccess"),
      user: matchedUser,
    };
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  const placeOrder = (orderDetails) => {
    const orderTotal = cartItems.reduce(
      (sum, item) => sum + item.qty * Number(item.price),
      0
    );

    const newOrder = {
      id: `ORD${Date.now()}`,
      createdAt: new Date().toISOString(),
      items: cartItems.map((item) => `${item.name} x${item.qty}`),
      total: orderTotal,
      status: settings.notificationsEnabled ? "confirmed" : "placed",
      paymentMethodKey: orderDetails.paymentMethod,
      customerName: orderDetails.name,
      region: settings.region,
    };

    setOrderHistory((currentOrders) => [newOrder, ...currentOrders]);
    setCartItems([]);
    setShowCheckout(false);
  };

  return (
    <div className={`App ${settings.darkMode ? "dark-mode" : ""}`}>
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
        onLoginClick={() => setShowLogin(true)}
        onOrderClick={() => {
          document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
        }}
        t={t}
        currentUser={currentUser}
      />

      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          settings={settings}
          onSettingsChange={updateSettings}
          onClearData={clearAllData}
          onAccountClick={() => {
            setShowSettings(false);
            setShowLogin(true);
          }}
          onLogout={logoutUser}
          currentUser={currentUser}
          orderHistory={orderHistory}
          formatPrice={formatPrice}
          formatDate={formatDate}
          t={t}
        />
      )}

      {showCheckout && (
        <CheckoutModal
          cartItems={cartItems}
          onClose={() => setShowCheckout(false)}
          onPlaceOrder={placeOrder}
          formatPrice={formatPrice}
          defaultRegion={settings.region}
          t={t}
          currentUser={currentUser}
        />
      )}

      <HeroSection
        onExploreClick={() => {
          document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
        }}
        onCartClick={() => setCartOpen(true)}
        t={t}
      />

      <FeaturedDishes
        dishes={menuItems}
        onAddToCart={addToCart}
        formatPrice={formatPrice}
        t={t}
      />
      <MenuSection
        dishes={menuItems}
        onAddToCart={addToCart}
        formatPrice={formatPrice}
        language={settings.language}
        t={t}
      />
      <AboutUs t={t} />
      <Footer t={t} />

      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateCartItemQty}
          formatPrice={formatPrice}
          onCheckout={() => {
            setShowCheckout(true);
            setCartOpen(false);
          }}
          t={t}
        />
      )}

      {showLogin && (
        <AuthModal
          onClose={() => setShowLogin(false)}
          onRegister={registerUser}
          onLogin={loginUser}
          onLogout={() => {
            logoutUser();
            setShowLogin(false);
          }}
          onOpenSettings={() => {
            setShowLogin(false);
            setShowSettings(true);
          }}
          currentUser={currentUser}
          t={t}
        />
      )}
    </div>
  );
}

export default App;
