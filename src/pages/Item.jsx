import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE from "../api.js";
import "../styles/Item.css";

export default function Item() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/items/${slug}`);
        if (!res.ok) throw new Error("Failed to load item");
        const data = await res.json();
        setItem(data);
      } catch (err) {
        setError("Could not load item.");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [slug]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p className="error">{error}</p>;
  if (!item) return <p>Item not found.</p>;

  return (
    <div className="item-page">
      <Link to="/menu" className="btn btn-outline" style={{ marginBottom: "20px" }}>
        ← Back to Menu
      </Link>

      <div className="item-detail">
        <img src={item.image} alt={item.name} className="item-img" />

        <div className="item-info">
          <h1>{item.name}</h1>
          {item.price && <p className="price">{item.price}</p>}
          <p>{item.desc}</p>

          <Link to={`/edit/${item.slug}`} className="btn btn-secondary">
            Edit Item
          </Link>
        </div>
      </div>
    </div>
  );
}
