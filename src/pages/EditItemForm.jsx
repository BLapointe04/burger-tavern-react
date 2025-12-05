import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API_BASE from "../api.js";
import "../styles/EditItemForm.css";

export default function EditItemForm() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Load the existing item
  useEffect(() => {
    const loadItem = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/items/${slug}`);
        if (!res.ok) throw new Error("Item not found");
        const data = await res.json();
        setItem(data);
      } catch (err) {
        setError("Could not load item.");
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, [slug]);

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${API_BASE}/api/items/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });

      if (!res.ok) throw new Error("Failed to save.");

      setSuccess("Item updated successfully!");
      setTimeout(() => navigate("/#/menu"), 800);
    } catch (err) {
      setError("Could not update item.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading item…</p>;
  if (error) return <p className="error">{error}</p>;
  if (!item) return <p>No item found.</p>;

  return (
    <div className="edit-form-page">
      <h1>Edit Item</h1>
      <form className="edit-form" onSubmit={handleSave}>
        <label>
          Name
          <input
            name="name"
            value={item.name || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price
          <input
            name="price"
            value={item.price || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="desc"
            value={item.desc || ""}
            onChange={handleChange}
            rows="4"
          />
        </label>

        <label>
          Image URL
          <input
            name="image"
            value={item.image || ""}
            onChange={handleChange}
          />
        </label>

        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn btn-secondary" disabled={saving}>
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
