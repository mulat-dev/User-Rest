import React, { useEffect, useMemo, useState } from "react";
import "./MenuSection.css";
import { translateCategory, translateTag } from "../i18n";

const MenuSection = ({ dishes, onAddToCart, formatPrice, language, t }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [favorites, setFavorites] = useState([]);

  const categories = useMemo(
    () => [...new Set(dishes.map((dish) => dish.category))],
    [dishes]
  );

  useEffect(() => {
    if (!categories.length) {
      setActiveCategory("");
      return;
    }

    setActiveCategory((currentCategory) => {
      if (currentCategory === "Favorites" || categories.includes(currentCategory)) {
        return currentCategory;
      }
      return categories[0];
    });
  }, [categories]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredDishes =
    activeCategory === "Favorites"
      ? dishes.filter((dish) => favorites.includes(dish.id))
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title">{t("ourMenu")}</h2>

      <div className="menu-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {translateCategory(language, category)}
          </button>
        ))}
        <button
          className={`filter-btn ${activeCategory === "Favorites" ? "active" : ""}`}
          onClick={() => setActiveCategory("Favorites")}
        >
          {t("favorites")}
        </button>
      </div>

      <div className="menu-grid">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="menu-card" style={{ background: dish.bg }}>
            <div className="menu-icon">
              <img src={dish.image} alt={dish.name} />
            </div>
            <div className="menu-info">
              <h3>
                {dish.name}
                {dish.tag && (
                  <span className={`tag ${dish.tag.toLowerCase().replace(/[^a-z]/g, "")}`}>
                    {translateTag(language, dish.tag)}
                  </span>
                )}
              </h3>
              <p>{dish.description}</p>
              <div className="menu-meta">
                <span className="price">{formatPrice(dish.price)}</span>
                <span className="rating">{t("rating")} {dish.rating}</span>
              </div>
              <div className="menu-actions">
                <button
                  className={`fav-btn ${favorites.includes(dish.id) ? "active" : ""}`}
                  onClick={() => toggleFavorite(dish.id)}
                  aria-label={
                    favorites.includes(dish.id)
                      ? t("removeFromFavorites", { name: dish.name })
                      : t("addToFavorites", { name: dish.name })
                  }
                >
                  {favorites.includes(dish.id) ? "\u2665" : "\u2661"}
                </button>
                <button className="add-btn" onClick={() => onAddToCart(dish)}>
                  {t("addToCart")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
