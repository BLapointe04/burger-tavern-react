import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE from "../api";
import "../styles/ItemModal.css";

export default function Item(){
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/items/${slug}`);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        setItem(await r.json());
      } catch (e) {
        setErr("Could not load item.");
      }
    })();
  }, [slug]);

  if (err) return <p className="error">{err}</p>;
  if (!item) return <p>Loading…</p>;

  return (
    <div className="page-wrap">
      <Link to="/burger-tavern-react/menu" className="btn" style={{ marginBottom: 16 }}>← Back to Menu</Link>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div className="ratio-1x1"><img className="img-cover" src={item.image} alt={item.name} /></div>
        <div className="card">
          <h1>{item.name}</h1>
          <p>{item.desc || item.subtitle}</p>
          <div className="price">{item.price}</div>
        </div>
      </div>
    </div>
  );
}
