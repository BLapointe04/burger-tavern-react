import React, { useEffect, useRef, useState } from 'react'

export default function SlideShow({ images = [], intervalMs = 3500 }){
  const [i, setI] = useState(0)
  const timerRef = useRef(null)

  useEffect(()=>{
    if (images.length <= 1) return
    timerRef.current = setInterval(()=> setI(idx => (idx + 1) % images.length), intervalMs)
    return ()=> clearInterval(timerRef.current)
  }, [images, intervalMs])

  if (!images.length) return null

  return (
    <div className="ss" role="region" aria-label="Featured images">
      <img className="ss__img" src={images[i].src} alt={images[i].alt || `Slide ${i+1}`} />
      <div className="ss__controls">
        <button onClick={()=> setI((i - 1 + images.length) % images.length)} aria-label="Previous slide">‹</button>
        <div className="ss__dots">
          {images.map((_, idx)=>(
            <button
              key={idx}
              aria-label={`Go to slide ${idx+1}`}
              className={idx === i ? 'active' : ''}
              onClick={()=> setI(idx)}
            />
          ))}
        </div>
        <button onClick={()=> setI((i + 1) % images.length)} aria-label="Next slide">›</button>
      </div>
    </div>
  )
}
