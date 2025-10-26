import React from 'react'
import { useParams, Link } from 'react-router-dom'

const db = {
  'classic-smash': {
    name: 'Classic Smash',
    desc: 'American cheese, pickles, griddled onions, Tavern sauce.',
    price: '$7 / $9',
    image: 'https://picsum.photos/id/1080/800/450'
  },
  'spicy-crunch': {
    name: 'Spicy Crunch',
    desc: 'Crispy onions, jalapeños, pepper jack, chipotle mayo.',
    price: '$10',
    image: 'https://picsum.photos/id/1081/800/450'
  },
  'veggie-garden': {
    name: 'Veggie Garden',
    desc: 'Lettuce, tomato, onion, pickles, garlic aioli.',
    price: '$9',
    image: 'https://picsum.photos/id/1084/800/450'
  },
  'straight-fries': {
    name: 'Straight-Cut Fries',
    desc: 'Made fresh. Add cheese or chili if you want.',
    price: '$4',
    image: 'https://picsum.photos/id/1068/800/450'
  },
  'curly-fries': {
    name: 'Curly Fries',
    desc: 'Great with ranch or our smoky ketchup.',
    price: '$5',
    image: 'https://picsum.photos/id/1069/800/450'
  },
  'chicken-tenders': {
    name: 'Chicken Tenders',
    desc: 'Comes with your choice of sauce.',
    price: '$8',
    image: 'https://picsum.photos/id/1074/800/450'
  }
}

export default function Item(){
  const { slug } = useParams()
  const item = db[slug]
  if(!item){
    return <p>Sorry, item not found.</p>
  }
  return (
    <>
      <Link to="/menu" className="btn secondary" style={{marginBottom:14}}>← Back to Menu</Link>
      <section className="grid grid-2">
        <div className="ratio-16x9"><img className="img-cover" src={item.image} alt={item.name} /></div>
        <article className="card">
          <h1>{item.name}</h1>
          <p className="lead">{item.desc}</p>
          <p className="price">{item.price}</p>
        </article>
      </section>
    </>
  )
}
