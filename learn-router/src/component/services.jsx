import React from 'react'
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate = useNavigate()
  function handlechange(){
    navigate('/')
  }
  return (
    <div>
      <h1>Services</h1>
      <button onClick={handlechange} >←</button>
    </div>
  )
}

export default Services
