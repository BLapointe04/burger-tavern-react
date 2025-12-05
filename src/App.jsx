import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/base.css";
import "./styles/Menu.css";
import "./styles/Item.css";
import "./styles/ItemModal.css";
import "./styles/MenuItemCard.css";
import "./styles/EditItemForm.css"; 
export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      {/* Page content swaps here based on the current route */}
      <main className="page-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
