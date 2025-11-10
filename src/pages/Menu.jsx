import { useEffect, useState } from "react";
import API_BASE from "../api";
import MenuItemCard from "../components/MenuItemCard.jsx";
import "../styles/Menu.css";
import "../styles/MenuItemCard.css"; // if you want the card styles

export default function Menu() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/menu`);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        setData(await r.json());
      } catch (e) {
        setErr("Could not load menu from server.");
        console.error(e);
      }
    })();
  }, []);

  if (err) return <p className="error">{err}</p>;
  if (!data) return <p>Loading…</p>;

  const { burgers = [], sides = [], specials = [] } = data;

  return (
    <>
      <section className="hero">
        <div>
          <h1>Smash Burgers. Simple Ingredients. Big Flavor.</h1>
          <p className="lead">
            Fresh beef, toasted buns, sauces made in-house. Grab a classic or try a monthly special.
          </p>
          <div className="cta">
            <a className="btn" href="#burgers">See the Menu</a>
            <a className="btn secondary" href="#specials">Monthly Special</a>
          </div>
        </div>
        <div className="ratio-16x9">
          <img className="img-cover" src="https://picsum.photos/id/1080/900/550" alt="Signature burger" />
        </div>
      </section>

      <section id="burgers" className="menu-section">
        <h2>Burgers</h2>
        <div className="menu-grid">
          {burgers.map(i => <MenuItemCard key={i.slug || i.name} item={i} />)}
        </div>
      </section>

      <section className="menu-section">
        <h2>Fries & Sides</h2>
        <div className="menu-grid">
          {sides.map(i => <MenuItemCard key={i.slug || i.name} item={i} />)}
        </div>
      </section>

      <section id="specials" className="menu-section">
        <h2>Monthly Specials</h2>
        <div className="menu-grid">
          {specials.map(i => <MenuItemCard key={i.slug || i.name} item={i} />)}
        </div>
      </section>
    </>
  );
}
