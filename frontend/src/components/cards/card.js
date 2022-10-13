import React from 'react'
import './card.css'

function card({title, description, image}) {
  return (
    <div className='card-container'>
        <img src={image} alt={image} className="image-card" />
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
  )
}

export default card