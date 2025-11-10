import "../styles/MenuItemCard.css";

export default function MenuItemCard({ item, onClick }) {
  return (
    <div className="menu-card" onClick={onClick}>
      <img src={item.main_image} alt={item.name} className="menu-img" />

      <div className="menu-info">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
