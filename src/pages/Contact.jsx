import React from 'react'

export default function Contact(){
  return (
    <section className="grid grid-2">
      <div className="card">
        <h2>Contact Us</h2>
        <p>Have a question or want to place a large order? (Forms not required in this part.)</p>
        <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="fullname">Full Name</label>
          <input className="input" id="fullname" name="fullname" required minLength={2} placeholder="Jane Doe" />

          <label htmlFor="email">Email</label>
          <input className="input" id="email" name="email" type="email" required placeholder="you@example.com" />

          <label htmlFor="message">Message</label>
          <textarea className="input" id="message" name="message" rows={5} required placeholder="How can we help?" />

          <button className="btn" type="submit">Send</button>
        </form>
      </div>
      <div className="card">
        <h2>Reviews</h2>
        <div style={{marginBottom: 16}}>
          <blockquote><p>“Best smash burger in town.”</p><cite>— Taylor</cite></blockquote>
          <blockquote><p>“Curly fries are perfect.”</p><cite>— Jordan</cite></blockquote>
          <blockquote><p>“Quick pickup, still hot.”</p><cite>— Casey</cite></blockquote>
        </div>
        <div className="ratio-16x9" style={{marginTop: 16}}>
          <iframe
            className="img-cover"
            style={{border: 0}}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Our Kitchen"
            loading="lazy"
            allowFullScreen/>
        </div>
      </div>
    </section>
  )
}
