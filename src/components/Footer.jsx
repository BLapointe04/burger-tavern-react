import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer(){
  return (
    <footer>
      <div className="container inner">
        <span>© The Burger Tavern</span>
        <span>
          <NavLink to="/contact">Contact &amp; Reviews</NavLink> ·{' '}
          <NavLink to="/about">About</NavLink>
        </span>
      </div>
    </footer>
  )
}
