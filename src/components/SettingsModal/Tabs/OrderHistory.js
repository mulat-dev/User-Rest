import React from "react";
import "./TabContent.css";

const OrderHistoryTab = ({ orders, formatPrice, formatDate, t }) => {
  return (
    <div className="tab-content">
      <h3>{t("orderHistory")}</h3>
      {orders.length === 0 ? (
        <p>{t("noOrders")}</p>
      ) : (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-card">
              <div className="order-row">
                <span className="order-label">{t("orderId")}:</span>
                <span>{order.id}</span>
              </div>
              <div className="order-row">
                <span className="order-label">{t("date")}:</span>
                <span>{formatDate(order.createdAt || order.date)}</span>
              </div>
              <div className="order-row">
                <span className="order-label">{t("items")}:</span>
                <span>{order.items.join(", ")}</span>
              </div>
              <div className="order-row">
                <span className="order-label">{t("total")}:</span>
                <span>{formatPrice(order.total)}</span>
              </div>
              <div className="order-row">
                <span className="order-label">{t("payment")}:</span>
                <span>{t(order.paymentMethodKey || "cashOnDelivery")}</span>
              </div>
              <div className="order-row">
                <span className="order-label">{t("region")}:</span>
                <span>{order.region}</span>
              </div>
              <div className="order-row">
                <span className="order-label">{t("status")}:</span>
                <span className={`order-status ${order.status?.toLowerCase()}`}>
                  {t(order.status === "placed" ? "statusPlaced" : "statusConfirmed")}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistoryTab;
