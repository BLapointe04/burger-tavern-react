import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <header>
      <div className="container topbar">
        <div className="brand">The Burger Tavern</div>
        {/* NOTE: Toggle not required for this part. Menu stacks vertically on small screens via CSS. */}
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact &amp; Reviews</NavLink>
          <NavLink to="/order" className="btn">Order</NavLink>
        </nav>
      </div>
    </header>
  )
}
