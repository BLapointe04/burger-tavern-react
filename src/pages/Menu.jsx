import { useEffect, useState } from "react";
import API_BASE from "../api";
import MenuItemCard from "../components/MenuItemCard.jsx";
import AddItemForm from "../components/AddItemForm.jsx";
import "../styles/Menu.css";
import "../styles/MenuItemCard.css";

export default function Menu() {
  const [burgers, setBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [specials, setSpecials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const loadMenu = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/menu`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setBurgers(data.burgers || []);
      setSides(data.sides || []);
      setSpecials(data.specials || []);
    } catch {
      setErr("Could not load menu from server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMenu();
  }, []);

  const handleAdded = (item, category) => {
    if (category === "burgers") setBurgers(prev => [item, ...prev]);
    if (category === "sides") setSides(prev => [item, ...prev]);
    if (category === "specials") setSpecials(prev => [item, ...prev]);
  };

  if (loading) return <p>Loading…</p>;
  if (err) return <p className="error">{err}</p>;

  return (
    <>
      <section className="menu-section">
        <h1>Menu</h1>
        <p className="lead">
          Browse the current lineup, or add a new burger, side, or special below.
        </p>
      </section>

      <AddItemForm onAdded={handleAdded} />

      <section className="menu-section">
        <h2>Burgers</h2>
        <div className="menu-grid">
          {burgers.map(i => (
            <MenuItemCard key={i.slug || i.name} item={i} />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Fries &amp; Sides</h2>
        <div className="menu-grid">
          {sides.map(i => (
            <MenuItemCard key={i.slug || i.name} item={i} />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Monthly Specials</h2>
        <div className="menu-grid">
          {specials.map(i => (
            <MenuItemCard key={i.slug || i.name} item={i} />
          ))}
        </div>
      </section>
    </>
  );
}
