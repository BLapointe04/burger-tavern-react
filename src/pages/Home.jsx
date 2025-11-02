import React from 'react'
import SlideShow from '../components/SlideShow.jsx'

export default function Home(){
  return (
    <>
      {/* ✅ Slideshow at the top */}
      <SlideShow images={[
        { src: 'https://picsum.photos/id/1080/1200/500', alt: 'Signature burger' },
        { src: 'https://picsum.photos/id/1081/1200/500', alt: 'Fries and sauces' },
        { src: 'https://picsum.photos/id/1060/1200/500', alt: 'Hand-spun shakes' },
      ]} />

      <section className="hero">
        <div>
          <h1>Smash Burgers. Simple Ingredients. Big Flavor.</h1>
          <p className="lead">
            We keep it straightforward: fresh beef, toasted buns, and sauces made in-house.
            Grab a classic or try a monthly special. Either way, you’ll leave happy.
          </p>
          <div className="cta">
            <a className="btn" href="/menu">See the Menu</a>
            <a className="btn secondary" href="/order">Order Online</a>
          </div>
        </div>
        <div className="ratio-16x9">
          <img className="img-cover" src="https://picsum.photos/id/1080/800/450" alt="Signature smash burger with fries" />
        </div>
      </section>

      <section className="grid grid-3">
        <article className="card">
          <h2>House Classics</h2>
          <p className="lead">Burgers, tenders, and fries done right. No shortcuts.</p>
          <div className="ratio-1x1"><img className="img-cover" src="https://picsum.photos/id/292/600/600" alt="Classic burger" /></div>
        </article>
        <article className="card">
          <h2>Monthly Specials</h2>
          <p className="lead">Limited runs we rotate every month. When it’s gone, it’s gone.</p>
          <div className="ratio-1x1"><img className="img-cover" src="https://picsum.photos/id/1081/600/600" alt="Monthly special burger" /></div>
        </article>
        <article className="card">
          <h2>Made for Takeout</h2>
          <p className="lead">Hot, packed neatly, and ready when you arrive.</p>
          <div className="ratio-1x1"><img className="img-cover" src="https://picsum.photos/id/1060/600/600" alt="Takeout bag and boxes" /></div>
        </article>
      </section>
    </>
  )
}
