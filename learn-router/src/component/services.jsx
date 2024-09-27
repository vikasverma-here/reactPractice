import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Services() {
  const navigate = useNavigate()
  function handlechange(){
    navigate('/')
  }
  return (
    <div>
      <div className="div">
      <Outlet/>
        <ul>
          <li> <NavLink to="/fullac"> fullac </NavLink> </li>
          <li> <NavLink> clean </NavLink> </li>
          <li> <NavLink> good food </NavLink> </li>
          <li> <NavLink> movie hall </NavLink> </li>
         
        </ul>
       
      </div>
      <button onClick={handlechange} >←</button>
    </div>
  )
}

export default Services
