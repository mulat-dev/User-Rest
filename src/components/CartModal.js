// src/components/CartModal.jsx
import React from "react";
import "./CartModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faTrashAlt,
  faPlus,
  faMinus,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const CartModal = ({
  cartItems,
  onClose,
  onRemove,
  onUpdateQty,
  onCheckout,
  formatPrice,
  t,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.qty * parseInt(item.price, 10),
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="cart-backdrop">
      <div className="cart-modal">
        <div className="cart-header">
          <div>
            <p className="cart-kicker">{t("cartReview")}</p>
            <h2>{t("yourOrder")}</h2>
          </div>
          <button onClick={onClose} className="cart-close-btn" aria-label={t("close")}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <h3>{t("yourCartIsEmpty")}</h3>
            <p>{t("emptyCartHint")}</p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => {
                const lineTotal = item.qty * parseInt(item.price, 10);

                return (
                  <li key={item.id} className="cart-item">
                    <img className="cart-item-image" src={item.image} alt={item.name} />

                    <div className="item-info">
                      <div className="item-copy">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">
                          {formatPrice(item.price)} {t("each")}
                        </span>
                      </div>

                      <div className="item-controls">
                        <div className="qty-control">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, item.qty - 1)}
                            aria-label={t("decreaseQuantity")}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span>{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, item.qty + 1)}
                            aria-label={t("increaseQuantity")}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="remove-item-btn"
                          onClick={() => onRemove(item.id)}
                          aria-label={t("removeItem")}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>

                    <div className="item-line-total">{formatPrice(lineTotal)}</div>
                  </li>
                );
              })}
            </ul>

            <div className="cart-footer">
              <div className="cart-summary-card">
                <div className="summary-row">
                  <span>{t("itemsCount")}</span>
                  <strong>{totalItems}</strong>
                </div>
                <div className="summary-row total-row">
                  <span>{t("total")}</span>
                  <strong>{formatPrice(total)}</strong>
                </div>
              </div>

              <button onClick={onCheckout} className="checkout-btn">
                {t("proceedToCheckout")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
