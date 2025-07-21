
import React, { useState } from "react";
import list from "../data";
import { useCart } from "../context/CartContext";

const Subscriptions = () => {
  const { addToCart, cart } = useCart();
  const [warning, setWarning] = useState("");

  const subscriptions = list.filter((item) =>
    item.service.toLowerCase().includes("subscription")
  );

  const handleAdd = (item) => {
    const result = addToCart(item, true);
    if (!result.success) {
      setWarning(result.message);
      setTimeout(() => setWarning(""), 2000);
    }
  };

  return (
    <div className="product-section">
      <h2>Subscriptions</h2>
      {warning && <div className="warning">{warning}</div>}
      <div className="products">
        {subscriptions.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.service} />
            <h3>{item.service}</h3>
            <p>{item.serviceInfo}</p>
            <p>${item.price}</p>
            <button
              disabled={cart.some(
                (c) => c.isSubscription && c.id === item.id
              )}
              onClick={() => handleAdd(item)}
            >
              {cart.some((c) => c.isSubscription && c.id === item.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;