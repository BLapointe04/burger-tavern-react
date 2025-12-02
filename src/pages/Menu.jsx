import React, { useEffect, useState } from "react";
import MenuItemCard from "../components/MenuItemCard.jsx";
import AddItemForm from "../components/AddItemForm.jsx";
import API_BASE from "../api.js";

export default function Menu() {
  const [menu, setMenu] = useState({ burgers: [], sides: [], specials: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load full menu from server
  const loadMenu = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE}/api/menu`);
      if (!res.ok) {
        throw new Error("Failed to load menu.");
      }
      const data = await res.json();

      setMenu({
        burgers: data.burgers ?? [],
        sides: data.sides ?? [],
        specials: data.specials ?? []
      });
    } catch (err) {
      console.error(err);
      setError("Could not load menu from server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMenu();
  }, []);

  // Called by AddItemForm when a new item is created successfully
  const handleItemAdded = (item, category) => {
    setMenu(prev => {
      const next = { ...prev };
      next[category] = [item, ...(prev[category] || [])];
      return next;
    });
  };

  // Delete an item and update local state without reload
  const handleDelete = async (slug) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${API_BASE}/api/items/${slug}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      // Optimistically update UI
      setMenu(prev => {
        const next = { ...prev };
        for (const key of ["burgers", "sides", "specials"]) {
          next[key] = (next[key] || []).filter(i => i.slug !== slug);
        }
        return next;
      });
    } catch (err) {
      console.error(err);
      alert("Could not delete item. Please try again.");
    }
  };

  return (
    <div className="menu-page">
      <section className="menu-section">
        <h1>Menu</h1>
        <p className="lead">
          Browse the current lineup, or add a new burger, side, or special below.
        </p>
      </section>

      {/* Add New Item form */}
      <section className="menu-section">
        <AddItemForm onAdded={handleItemAdded} />
      </section>

      {loading && <p>Loading menu…</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <section className="menu-section">
            <h2>Burgers</h2>
            <div className="menu-grid">
              {menu.burgers.map(item => (
                <MenuItemCard
                  key={item.slug}
                  item={item}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h2>Fries &amp; Sides</h2>
            <div className="menu-grid">
              {menu.sides.map(item => (
                <MenuItemCard
                  key={item.slug}
                  item={item}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </section>

          <section className="menu-section">
            <h2>Monthly Specials</h2>
            <div className="menu-grid">
              {menu.specials.map(item => (
                <MenuItemCard
                  key={item.slug}
                  item={item}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
