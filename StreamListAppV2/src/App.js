
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Completed from "./components/Completed";
import Settings from "./components/Settings";
import { MdEdit, MdDelete, MdCheckCircle } from "react-icons/md";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>StreamList</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/completed">Completed Tasks</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
