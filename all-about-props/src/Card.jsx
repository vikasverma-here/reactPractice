import React from 'react'

function Card(prop) {
  return (
    <div>
      <h1>{prop.name}</h1>
      <p>{prop.children}</p>
    </div>
  )
}

export default Card
