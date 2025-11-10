import { NavLink } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
        <span>© The Burger Tavern</span>
        <span>
          <NavLink to="contact">Contact &amp; Reviews</NavLink> ·{" "}
          <NavLink to="about">About</NavLink>
        </span>
      </div>
    </footer>
  );
}
