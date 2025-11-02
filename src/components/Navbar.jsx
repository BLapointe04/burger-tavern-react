import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const btnRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(()=>{
    const onKey = (e)=>{ if(e.key === 'Escape') setOpen(false) }
    const onClickAway = (e)=>{
      if (!menuRef.current || !btnRef.current) return
      if (!menuRef.current.contains(e.target) && !btnRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClickAway)
    return ()=>{
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClickAway)
    }
  }, [])

  const linkClass = ({ isActive }) => isActive ? 'nav__link is-active' : 'nav__link'

  return (
    <header className="nav">
      <div className="container topbar">
        <Link to="/" className="brand">The Burger Tavern</Link>

        <button
          ref={btnRef}
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={()=>setOpen(o=>!o)}
        >
          ☰ <span className="sr-only">Menu</span>
        </button>

        <nav id="primary-menu" ref={menuRef} className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Primary">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/menu" className={linkClass}>Menu</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact &amp; Reviews</NavLink>
          <NavLink to="/order" className={linkClass}>Order</NavLink>
        </nav>
      </div>
    </header>
  )
}
