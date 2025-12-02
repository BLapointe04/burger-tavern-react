import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import "./styles/base.css"; // adjust if your main stylesheet is named differently

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
