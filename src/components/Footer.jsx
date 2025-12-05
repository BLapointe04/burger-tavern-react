import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© The Burger Tavern</p>
      <nav>
        <a href="#/contact">Contact & Reviews</a> • <a href="#/about">About</a>
      </nav>
    </footer>
  );
}
