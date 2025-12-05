import { useState } from "react";
import { createItem } from "../api";

export default function AddItemForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    category: "burgers",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await createItem(form);
      setSuccess("Item added!");
      console.log("Created:", res);

      setForm({
        name: "",
        price: "",
        description: "",
        imageUrl: "",
        category: "burgers",
      });
    } catch (err) {
      console.error(err);
      setError(err.message || "Error saving item");
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input name="name" value={form.name} onChange={handleChange} />

      <label>Price</label>
      <input name="price" value={form.price} onChange={handleChange} />

      <label>Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <label>Image URL</label>
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />

      <label>Category</label>
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="burgers">Burgers</option>
        <option value="fries">Fries & Sides</option>
        <option value="specials">Monthly Specials</option>
      </select>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <button type="submit">Add Item</button>
    </form>
  );
}
