import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItemCard({ item }){
  const { name, subtitle, desc, price, image, slug } = item
  return (
    <article className="menu-item">
      <div className="ratio-1x1">
        <img className="img-cover" src={image} alt={name} />
      </div>
      <div>
        <h3>{subtitle || name}</h3>
        <p>{desc}</p>
        <div style={{marginTop: 8}}>
          <Link to={`/item/${slug}`} className="btn secondary">View</Link>
        </div>
      </div>
      <div className="price">{price}</div>
    </article>
  )
}
