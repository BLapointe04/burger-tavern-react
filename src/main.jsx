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
import EditItemForm from "./pages/EditItemForm.jsx"; // we'll add this file next batch

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* HashRouter is required for GitHub Pages to avoid 404s */}
    <HashRouter>
      <Routes>
        {/* App provides the layout: navbar + footer */}
        <Route path="/" element={<App />}>
          {/* index = home page */}
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="item/:slug" element={<Item />} />
          <Route path="edit/:slug" element={<EditItemForm />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
          {/* fallback: go home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
