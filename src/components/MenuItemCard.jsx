import { Link } from "react-router-dom";

function slugify(s = "") {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function MenuItemCard({ item }) {
  const name  = item?.name ?? "";
  const desc  = item?.desc ?? item?.subtitle ?? "";
  const image = item?.image ?? item?.main_image ?? "";
  const price = typeof item?.price === "number" ? `$${item.price.toFixed(2)}` : (item?.price ?? "");
  const slug  = item?.slug ?? slugify(name);

  return (
    <article className="menu-card">
      <div className="ratio-1x1">
        <img className="img-cover" src={image} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        {desc && <p>{desc}</p>}
        {price && <div className="price">{price}</div>}
        <div className="actions">
          <Link className="btn" to={`/item/${slug}`} aria-label={`View ${name}`}>View</Link>
        </div>
      </div>
    </article>
  );
}
