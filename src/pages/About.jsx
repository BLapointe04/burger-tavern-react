import React from 'react'

export default function About(){
  return (
    <section className="grid grid-2">
      <article className="card">
        <h1>About Burger Tavern</h1>
        <p className="lead">Smash burgers, simple ingredients, big flavor.</p>
        <p>We keep it straightforward: fresh beef, toasted buns, and sauces made in-house.</p>
      </article>
      <div className="ratio-16x9">
        <img className="img-cover" src="https://picsum.photos/id/1062/800/450" alt="Burger on a board" />
      </div>
    </section>
  )
}
