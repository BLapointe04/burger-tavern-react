import React from 'react'

export default function SpecialCard({ title, desc, price, image }){
  return (
    <article>
      <div className="ratio-1x1">
        <img className="img-cover" src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="price">{price}</div>
    </article>
  )
}
