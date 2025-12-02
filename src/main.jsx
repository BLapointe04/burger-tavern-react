import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Item from "./pages/Item.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Order from "./pages/Order.jsx";

// HashRouter should FIX ALL 404 ERRORS on GitHub Pages
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/item/:slug" element={<Item />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
