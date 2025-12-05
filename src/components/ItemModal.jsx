import React, { useState } from "react";
import "../styles/ItemModal.css";
import EditItemForm from "../pages/EditItemForm";
import { updateItem, deleteItem } from "../api";

export default function ItemModal({ item, onClose, onUpdated, onDeleted }) {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  if (!item) return null;

  const handleDelete = async () => {
    setLoading(true);
    const result = await deleteItem(item.slug);

    if (result.ok) {
      onDeleted(item.slug);
      onClose();
    } else {
      alert("Delete failed.");
    }

    setLoading(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>

        {!editing && (
          <>
            <img src={item.image} className="modal-image" />
            <h2>{item.name}</h2>
            <p className="modal-price">{item.price}</p>
            <p>{item.desc}</p>

            <div className="modal-buttons">
              <button className="edit-btn" onClick={() => setEditing(true)}>
                Edit Item
              </button>
              <button
                className="delete-btn"
                onClick={() => setConfirmDelete(true)}
              >
                Delete Item
              </button>
            </div>

            {confirmDelete && (
              <div className="delete-confirm">
                <p>Are you sure you want to delete this item?</p>
                <button className="danger" onClick={handleDelete} disabled={loading}>
                  Yes, Delete
                </button>
                <button onClick={() => setConfirmDelete(false)}>Cancel</button>
              </div>
            )}
          </>
        )}

        {editing && (
          <EditItemForm
            item={item}
            onCancel={() => setEditing(false)}
            onSaved={(updated) => {
              onUpdated(updated);
              setEditing(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
