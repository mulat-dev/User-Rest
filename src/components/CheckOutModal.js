// src/components/CheckoutModal.jsx
import React from 'react';
import './CheckOutModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CheckoutModal = ({ cartItems, onClose }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.qty * parseInt(item.price),
    0
  );

  return (
    <div className="checkout-backdrop">
      <div className="checkout-modal">
        <div className="checkout-header">
          <h2>Checkout</h2>
          <button className="close-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="checkout-body">
          <section className="checkout-section">
            <h3>Order Summary</h3>
            {cartItems.map((item) => (
              <div className="checkout-item" key={item.id}>
                <span>{item.name} x{item.qty}</span>
                <span>{item.qty * item.price} ETB</span>
              </div>
            ))}
            <div className="checkout-total">
              <strong>Total:</strong> <span>{total} ETB</span>
            </div>
          </section>

          <section className="checkout-section">
            <h3>Delivery Information</h3>
            <div className="form-group">
              <input type="text" placeholder="Enter your name" />
              <input type="tel" placeholder="Enter phone number" />
            </div>
            <textarea placeholder="Enter your full delivery address" rows="2" />
          </section>

          <section className="checkout-section">
            <h3>Payment Method</h3>
            <label>
              <input type="radio" name="payment" defaultChecked /> Cash on Delivery
            </label>
            <label>
              <input type="radio" name="payment" /> Mobile Money (CBE Birr, M-Birr)
            </label>
          </section>

          <section className="checkout-section">
            <h3>Special Instructions (Optional)</h3>
            <input
              type="text"
              placeholder="Any special requests or delivery instructions..."
            />
          </section>

          <button className="place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
