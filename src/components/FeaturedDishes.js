import React from "react";
import "./FeaturedDishes.css";

const dishes = [
  {
    id: 1,
    name: "Kitfo Special",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Tibs Delight",
    price: 90,
    image:
      "https://static.vecteezy.com/system/resources/previews/059/782/942/non_2x/a-platter-of-ethiopian-injera-topped-with-various-colorful-wot-stews-including-lentils-greens-and-chicken-placed-on-a-traditional-basket-table-with-natural-lighting-photo.jpeg",
  },
  {
    id: 3,
    name: "Injera Combo",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
];

const FeaturedDishes = ({ onAddToCart }) => {
  return (
    <section className="featured-section" id="featured">
      <h2 className="section-title">Signature Dishes</h2>
      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} className="dish-img" />
            <h3>{dish.name}</h3>
            <p className="dish-price">{dish.price} ETB</p>
            <button className="order-btn" onClick={() => onAddToCart(dish)}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDishes;
