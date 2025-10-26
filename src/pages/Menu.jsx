import React from 'react'
import MenuItemCard from '../components/MenuItemCard.jsx'

const burgers = [
  {
    name: 'Classic Smash',
    subtitle: 'Single or Double',
    desc: 'American cheese, pickles, griddled onions, Tavern sauce.',
    price: '$7 / $9',
    image: 'https://picsum.photos/id/1080/400/400',
    slug: 'classic-smash'
  },
  {
    name: 'Spicy Crunch',
    subtitle: 'Jalapeño + Crunch',
    desc: 'Crispy onions, jalapeños, pepper jack, chipotle mayo.',
    price: '$10',
    image: 'https://picsum.photos/id/1081/400/400',
    slug: 'spicy-crunch'
  },
  {
    name: 'Veggie Garden',
    subtitle: 'Grilled Veggie Patty',
    desc: 'Lettuce, tomato, onion, pickles, garlic aioli.',
    price: '$9',
    image: 'https://picsum.photos/id/1084/400/400',
    slug: 'veggie-garden'
  }
]

const sides = [
  { name: 'Straight-Cut Fries', subtitle: 'Lightly Salted', desc: 'Made fresh. Add cheese or chili if you want.', price: '$4', image: 'https://picsum.photos/id/1068/400/400', slug: 'straight-fries' },
  { name: 'Curly Fries', subtitle: 'Seasoned Spirals', desc: 'Great with ranch or our smoky ketchup.', price: '$5', image: 'https://picsum.photos/id/1069/400/400', slug: 'curly-fries' },
  { name: 'Chicken Tenders', subtitle: 'Hand-Breaded', desc: 'Comes with your choice of sauce.', price: '$8', image: 'https://picsum.photos/id/1074/400/400', slug: 'chicken-tenders' }
]

export default function Menu(){
  return (
    <>
      <section>
        <h1>Menu</h1>
        <p className="lead">Everything is made to order. Tell us how you like it.</p>
      </section>

      <section className="grid grid-2">
        <div className="card">
          <h2>Burgers</h2>
          {burgers.map((item) => <MenuItemCard key={item.slug} item={item} />)}
        </div>
        <div className="card">
          <h2>Fries &amp; Sides</h2>
          {sides.map((item) => <MenuItemCard key={item.slug} item={item} />)}
        </div>
      </section>

      <section className="card">
        <h2>Monthly Specials</h2>
        <div className="grid grid-3">
          {[
            { title: 'Maple Bacon Melt', desc: 'Double smash, maple glaze, bacon, cheddar.', price: '$12', image: 'https://picsum.photos/id/1070/600/600' },
            { title: 'Hot Honey Tender Box', desc: 'Tenders, hot honey drizzle, pickles.', price: '$11', image: 'https://picsum.photos/id/1071/600/600' },
            { title: 'Cacio e Pepe Fries', desc: 'Pecorino and cracked pepper.', price: '$7', image: 'https://picsum.photos/id/1072/600/600' },
          ].map(card => (
            <article key={card.title}>
              <div className="ratio-1x1"><img className="img-cover" src={card.image} alt={card.title} /></div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="price">{card.price}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
