
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavigationBar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Subscriptions</Link>
      <Link to="/accessories">Accessories</Link>
      <Link to="/cart">
        Cart
        <span className="cart-badge">{totalItems}</span>
      </Link>
    </nav>
  );
};

export default NavigationBar;
