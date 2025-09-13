// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedDishes from "./components/FeaturedDishes";
import MenuSection from "./components/MenuSection";
import CartModal from "./components/CartModal";
import AuthModal from "./components/AuthModal"; // ✅ THIS GOES HERE, not inside return
import SettingsModal from "./components/SettingsModal/SettingsModal";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import CheckoutModal from "./components/CheckOutModal";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [darkMode, setDarkMode] = useState(false);
const [showCheckout, setShowCheckout] = useState(false);

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

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header
  cartCount={cartItems.length}
  onCartClick={() => setCartOpen(true)}
  onLoginClick={() => setShowLogin(true)}
  onSettingsClick={() => setShowSettings(true)}
  onOrderClick={() => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  }} // scroll to menu section
/>

      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          setDarkMode={setDarkMode} // 💡 pass the function
          darkMode={darkMode}
        />
      )}

{showCheckout && (
  <CheckoutModal
    cartItems={cartItems}
    onClose={() => setShowCheckout(false)}
  />
)}


     <HeroSection
  onExploreClick={() => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  }}
  onCartClick={() => setCartOpen(true)}
/>

      <FeaturedDishes onAddToCart={addToCart} />
      <MenuSection onAddToCart={addToCart} />
      <AboutUs />
      <Footer />
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onCheckout={() => {
            setShowCheckout(true);
            setCartOpen(false);
          }}
        />
      )}

      {showLogin && <AuthModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}

export default App;
