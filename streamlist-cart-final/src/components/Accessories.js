
import React from "react";
import list from "../data";
import { useCart } from "../context/CartContext";

const Accessories = () => {
  const { addToCart } = useCart();

  const accessories = list.filter(
    (item) => !item.service.toLowerCase().includes("subscription")
  );

  return (
    <div className="product-section">
      <h2>Accessories</h2>
      <div className="products">
        {accessories.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.service} />
            <h3>{item.service}</h3>
            <p>{item.serviceInfo}</p>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item, false)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;