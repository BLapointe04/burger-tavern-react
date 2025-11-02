import React, { useState } from 'react'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/yourid" 

export default function Contact(){
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setStatus({ state: 'loading', msg: '' })
    try{
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: form
      })
      if(res.ok){
        setStatus({ state: 'success', msg: 'Thanks! We’ll be in touch soon.' })
        e.currentTarget.reset()
      } else {
        setStatus({ state: 'error', msg: 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ state: 'error', msg: 'Network error. Try again later.' })
    }
  }

  return (
    <section className="grid grid-2">
      <div className="card">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit} noValidate>
          <label>Full Name</label>
          <input className="input" name="name" required placeholder="Jane Doe"/>

          <label>Email</label>
          <input className="input" name="email" type="email" required placeholder="you@example.com"/>

          <label>Message</label>
          <textarea className="input" name="message" required minLength={10} placeholder="How can we help?"></textarea>

          <button className="btn" type="submit" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending…' : 'Send'}
          </button>

          {status.state === 'success' && <p className="contact__success">{status.msg}</p>}
          {status.state === 'error' && <p className="contact__error">{status.msg}</p>}
        </form>
      </div>

      <div className="card">
        <h3>Visit Us</h3>
        <p>123 Smash Lane, Columbia, SC</p>
        <div className="ratio-16x9">
          <iframe
            className="img-cover"
            style={{border: 0}}
            src="https://www.google.com/maps?q=columbia+sc&output=embed"
            title="location"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
