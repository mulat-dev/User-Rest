// src/components/CartModal.jsx
import React from 'react';
import './CartModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartModal = ({ cartItems, onClose, onRemove, onCheckout }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.qty * parseInt(item.price),
    0
  );

  return (
    <div className="cart-backdrop">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Your Order</h2>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">
                      {item.price} ETB each
                    </span>
                  </div>
                  <div className="item-actions">
                    <span>Qty: {item.qty}</span>
                    <button onClick={() => onRemove(item.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <strong>Total: {total} ETB</strong>
              <button onClick={onCheckout} className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
