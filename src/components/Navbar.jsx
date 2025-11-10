import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="container topbar">
        <NavLink to="" className="brand">The Burger Tavern</NavLink>

        <button className="nav__toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">☰ Menu</button>

        <div className={`nav__menu ${open ? "is-open" : ""}`}>
          <NavLink to="" end className="nav__link">Home</NavLink>
          <NavLink to="menu" className="nav__link">Menu</NavLink>
          <NavLink to="about" className="nav__link">About</NavLink>
          <NavLink to="contact" className="nav__link">Contact & Reviews</NavLink>
          <NavLink to="order" className="nav__link">Order</NavLink>
        </div>
      </div>
    </nav>
  );
}
