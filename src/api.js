const API_BASE = "https://burger-tavern-server.onrender.com";
export default API_BASE;
export async function updateItem(slug, data) {
    const res = await fetch(`${BASE_URL}/items/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return res.json();
  }
  
  export async function deleteItem(slug) {
    const res = await fetch(`${BASE_URL}/items/${slug}`, {
      method: "DELETE"
    });
    return res.json();
  }
  