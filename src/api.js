const API_URL = "https://burger-tavern-server.onrender.com";

// GET all items
export async function fetchItems() {
  const res = await fetch(`${API_URL}/api/items`);
  return res.json();
}

// ADD item
export async function addItem(itemData) {
  const res = await fetch(`${API_URL}/api/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
  });
  return res.json();
}

// EDIT item
export async function updateItem(id, updatedData) {
  const res = await fetch(`${API_URL}/api/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

// DELETE item
export async function deleteItem(id) {
  const res = await fetch(`${API_URL}/api/items/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export default {
  fetchItems,
  addItem,
  updateItem,
  deleteItem,
};
