
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0)
    return <div className="cart-empty">Your cart is empty.</div>;

  return (
    <div className="cart-section">
      <h2>Your Cart</h2>
      <button className="clear-btn" onClick={clearCart}>
        Empty Cart
      </button>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.service} />
            <div>
              <h4>{item.service}</h4>
              <p>${item.price}</p>
              {!item.isSubscription && (
                <div>
                  <label>Qty: </label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                  />
                </div>
              )}
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">Total: ${totalPrice}</div>
    </div>
  );
};

export default Cart;
