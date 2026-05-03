import React from "react";
import "./FeaturedDishes.css";
import { dishes as menuDishes } from "../data/menuData";

const featuredDishes = menuDishes
  .filter((dish) => ["Popular", "Signature"].includes(dish.tag) || dish.category === "Noodles")
  .slice(0, 3);

const FeaturedDishes = ({ onAddToCart, formatPrice, t }) => {
  return (
    <section className="featured-section" id="featured">
      <h2 className="section-title">{t("featuredTitle")}</h2>
      <div className="dishes-grid">
        {featuredDishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} className="dish-img" />
            <h3>{dish.name}</h3>
            <p className="dish-price">{formatPrice(dish.price)}</p>
            <button className="order-btn" onClick={() => onAddToCart(dish)}>
              {t("orderNow")}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDishes;
