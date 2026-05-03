// src/components/CheckoutModal.jsx
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./CheckOutModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faMoneyBillWave,
  faQrcode,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const mobilePaymentOptions = {
  telebirr: {
    label: "Telebirr",
    merchantLabel: "Telebirr Merchant",
    merchantValue: "+251 91 455 7788",
    colorClass: "telebirr",
  },
  cbeBirr: {
    label: "CBE Birr",
    merchantLabel: "CBE Birr Account",
    merchantValue: "1000678901234",
    colorClass: "cbe-birr",
  },
};

const CheckoutModal = ({
  cartItems,
  onClose,
  onPlaceOrder,
  formatPrice,
  defaultRegion,
  t,
  currentUser,
}) => {
  const [name, setName] = useState(currentUser?.fullName || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [address, setAddress] = useState(currentUser?.address || defaultRegion);
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  const [mobileProvider, setMobileProvider] = useState("telebirr");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [paymentReference] = useState(`PAY-${Date.now().toString().slice(-8)}`);

  const total = cartItems.reduce(
    (sum, item) => sum + item.qty * parseInt(item.price, 10),
    0
  );

  const selectedMobilePayment = mobilePaymentOptions[mobileProvider];

  const qrPayload = [
    "CHANOLLY NOODLES",
    `Provider: ${selectedMobilePayment.label}`,
    `Reference: ${paymentReference}`,
    `Amount: ${formatPrice(total)}`,
    `Customer: ${name || "Guest"}`,
    `Phone: ${phone || "N/A"}`,
    `${selectedMobilePayment.merchantLabel}: ${selectedMobilePayment.merchantValue}`,
    "Purpose: Order payment",
  ].join("\n");

  const resolvedPaymentMethod =
    paymentMethod === "mobileMoney" ? mobileProvider : paymentMethod;

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      window.alert(t("checkoutValidation"));
      return;
    }

    onPlaceOrder({
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      paymentMethod: resolvedPaymentMethod,
      specialInstructions: specialInstructions.trim(),
      paymentReference,
    });

    window.alert(
      paymentMethod === "mobileMoney"
        ? t("mobilePaymentSuccess")
        : t("orderPlacedSuccess")
    );
  };

  return (
    <div className="checkout-backdrop">
      <div className="checkout-modal">
        <div className="checkout-header">
          <div>
            <p className="checkout-kicker">{t("secureCheckout")}</p>
            <h2>{t("checkout")}</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label={t("close")}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="checkout-body">
          <div className="checkout-main">
            <section className="checkout-section">
              <h3>{t("deliveryInformation")}</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t("enterName")}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type="tel"
                  placeholder={t("enterPhone")}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <textarea
                placeholder={t("enterAddress")}
                rows="3"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </section>

            <section className="checkout-section">
              <h3>{t("paymentMethod")}</h3>
              <div className="payment-method-grid">
                <button
                  type="button"
                  className={`payment-method-card ${
                    paymentMethod === "cashOnDelivery" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("cashOnDelivery")}
                >
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  <span>{t("cashOnDelivery")}</span>
                </button>
                <button
                  type="button"
                  className={`payment-method-card ${
                    paymentMethod === "mobileMoney" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("mobileMoney")}
                >
                  <FontAwesomeIcon icon={faMobileScreen} />
                  <span>{t("mobileMoney")}</span>
                </button>
              </div>

              {paymentMethod === "mobileMoney" && (
                <div className="mobile-payment-panel">
                  <div className="provider-switcher">
                    {Object.entries(mobilePaymentOptions).map(([providerKey, provider]) => (
                      <button
                        key={providerKey}
                        type="button"
                        className={`provider-chip ${
                          mobileProvider === providerKey ? "active" : ""
                        } ${provider.colorClass}`}
                        onClick={() => setMobileProvider(providerKey)}
                      >
                        {provider.label}
                      </button>
                    ))}
                  </div>

                  <div className="qr-payment-card">
                    <div className="qr-card-header">
                      <div>
                        <h4>{t("scanToPay")}</h4>
                        <p>{t("scanToPayHint")}</p>
                      </div>
                      <div className="qr-badge">
                        <FontAwesomeIcon icon={faQrcode} />
                      </div>
                    </div>

                    <div className="qr-layout">
                      <div className="qr-code-wrap">
                        <QRCodeSVG
                          value={qrPayload}
                          size={170}
                          bgColor="#ffffff"
                          fgColor="#1f2937"
                          includeMargin
                        />
                      </div>

                      <div className="qr-payment-details">
                        <div className="qr-detail-row">
                          <span>{t("provider")}</span>
                          <strong>{selectedMobilePayment.label}</strong>
                        </div>
                        <div className="qr-detail-row">
                          <span>{selectedMobilePayment.merchantLabel}</span>
                          <strong>{selectedMobilePayment.merchantValue}</strong>
                        </div>
                        <div className="qr-detail-row">
                          <span>{t("paymentReference")}</span>
                          <strong>{paymentReference}</strong>
                        </div>
                        <div className="qr-detail-row">
                          <span>{t("amountToPay")}</span>
                          <strong>{formatPrice(total)}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <section className="checkout-section">
              <h3>{t("specialInstructions")}</h3>
              <input
                type="text"
                placeholder={t("specialInstructionsPlaceholder")}
                value={specialInstructions}
                onChange={(event) => setSpecialInstructions(event.target.value)}
              />
            </section>
          </div>

          <aside className="checkout-sidebar">
            <section className="checkout-section order-summary-card">
              <h3>{t("orderSummary")}</h3>
              <div className="checkout-items">
                {cartItems.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <div className="checkout-item-copy">
                      <span>{item.name}</span>
                      <small>{t("qty")}: {item.qty}</small>
                    </div>
                    <span>{formatPrice(item.qty * item.price)}</span>
                  </div>
                ))}
              </div>
              <div className="checkout-total">
                <strong>{t("total")}:</strong> <span>{formatPrice(total)}</span>
              </div>
            </section>

            <button className="place-order-btn" onClick={handleSubmit}>
              {paymentMethod === "mobileMoney" ? t("confirmPaymentOrder") : t("placeOrder")}
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
