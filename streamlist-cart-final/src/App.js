
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavigationBar from "./components/NavigationBar";
import Subscriptions from "./components/Subscriptions";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Subscriptions />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
