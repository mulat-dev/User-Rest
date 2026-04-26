import React, { useState } from 'react';
import './MenuSection.css';
import { dishes } from '../data/menuData';

const categories = [
  'All Items',
  'Noodles',
  'Rice',
  'Sizziling',
  'Salads',
  'Soup',
  'Mojito',
  'Smoothie',
  'Extras',
  'Favorites'
];


const MenuSection = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  const filteredDishes =
    activeCategory === 'Favorites'
      ? dishes.filter((dish) => favorites.includes(dish.id))
      : activeCategory === 'All Items'
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
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
                  <span className={`tag ${dish.tag.toLowerCase()}`}>{dish.tag}</span>
                )}
              </h3>
              <p>{dish.description}</p>
              <div className="menu-meta">
                <span className="price">{dish.price} ETB</span>
                <span className="rating">⭐ {dish.rating}</span>
              </div>
              <div className="menu-actions">
                <button
                  className={`fav-btn ${favorites.includes(dish.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(dish.id)}
                >
                  {favorites.includes(dish.id) ? '❤️' : '♡'}
                </button>
                <button className="add-btn" onClick={() => onAddToCart(dish)}>
                  Add to Cart
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
