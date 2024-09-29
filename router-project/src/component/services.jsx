
import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Services() {
    const navigate = useNavigate()
    function handlechange (){
        navigate('/')
    }
  return (
    <div>
       
      <h1>Services is here</h1>
      <button onClick={handlechange} >Go back to home </button>
      <h1>WHAT I SERVE YOU</h1>

      
   
    </div>
  )
}

export default Services
