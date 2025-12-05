import { useState } from "react";
import Joi from "joi";
import API_BASE from "../api";

// Price regex: 9.99 or $9.99
const priceRegex = /^\$?\d+(\.\d{2})?$/;

const schema = Joi.object({
  name: Joi.string().min(2).max(80).required(),
  desc: Joi.string().min(2).max(300).required(),
  imageUrl: Joi.string().uri().required(),   // <-- FIXED
  price: Joi.string().pattern(priceRegex).required(),
  category: Joi.string().valid("burgers", "sides", "specials").required(),
});

export default function AddItemForm({ onAdded }) {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    imageUrl: "",        // <-- FIXED
    price: "",
    category: "burgers",
  });

  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("");

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setStatus("");

    const { error } = schema.validate(form, { abortEarly: false });
    if (error) {
      setErrors(error.details.map((d) => d.message));
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        const messages = [];
        if (data.message) messages.push(data.message);
        if (Array.isArray(data.details)) messages.push(...data.details);
        setErrors(messages.length ? messages : ["Failed to add item."]);
        return;
      }

      if (onAdded) {
        onAdded(data.item, data.category);
      }

      setStatus("Item added!");
      setForm({
        name: "",
        desc: "",
        imageUrl: "",
        price: "",
        category: "burgers",
      });

      setTimeout(() => setStatus(""), 2000);
    } catch {
      setErrors(["Network error while adding item."]);
    }
  };

  return (
    <form className="card add-item-form" onSubmit={handleSubmit}>
      <h2>Add New Menu Item</h2>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <label>
          <div>Name</div>
          <input name="name" value={form.name} onChange={update} required />
        </label>

        <label>
          <div>Price (ex: $9.99)</div>
          <input
            name="price"
            value={form.price}
            onChange={update}
            placeholder="$9.99"
            required
          />
        </label>

        <label style={{ gridColumn: "1 / -1" }}>
          <div>Description</div>
          <textarea
            name="desc"
            value={form.desc}
            onChange={update}
            rows={3}
            required
          />
        </label>

        <label style={{ gridColumn: "1 / -1" }}>
          <div>Image URL</div>
          <input
            name="imageUrl"   // <-- FIXED
            value={form.imageUrl}
            onChange={update}
            placeholder="https://..."
            required
          />
        </label>

        <label>
          <div>Category</div>
          <select name="category" value={form.category} onChange={update}>
            <option value="burgers">Burgers</option>
            <option value="sides">Fries & Sides</option>
            <option value="specials">Specials</option>
          </select>
        </label>
      </div>

      {errors.length > 0 && (
        <ul
          className="card"
          style={{
            marginTop: 12,
            background: "#fff4f4",
            border: "1px solid #f8c2c2",
          }}
        >
          {errors.map((msg, i) => (
            <li key={i} style={{ color: "#b00020" }}>
              {msg}
            </li>
          ))}
        </ul>
      )}

      {status && (
        <p
          className="card"
          style={{
            marginTop: 12,
            background: "#e6f7ed",
            border: "1px solid #b6e3c6",
          }}
        >
          {status}
        </p>
      )}

      <div style={{ marginTop: 12 }}>
        <button type="submit" className="btn secondary">
          Add Item
        </button>
      </div>
    </form>
  );
}
