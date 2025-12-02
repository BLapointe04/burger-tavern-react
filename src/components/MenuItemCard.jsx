import React from "react";
import { Link } from "react-router-dom";
import "./MenuItemCard.css";

export default function MenuItemCard({ item, onDelete }) {
  if (!item) return null;

  const { slug, name, desc, price, image } = item;

  return (
    <article className="menu-card">
      {image && (
        <img
          src={image}
          alt={name}
          className="menu-card-img"
          loading="lazy"
        />
      )}

      <div className="menu-card-body">
        <div className="menu-card-header">
          <h3>{name}</h3>
          {price && <span className="menu-card-price">{price}</span>}
        </div>

        {desc && <p className="menu-card-desc">{desc}</p>}

        <div className="menu-card-actions">
          {/* View existing details page */}
          <Link to={`/item/${slug}`} className="btn btn-outline">
            View
          </Link>

          {/* NEW: Edit page at /edit/:slug (we'll define this next batch) */}
          <Link to={`/edit/${slug}`} className="btn btn-secondary">
            Edit
          </Link>

          {/* NEW: Delete triggers handler from Menu.jsx */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete?.(slug)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
