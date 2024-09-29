import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar' >
      <ul>
        <li></li>
        <li> <NavLink to="/"  > HOME </NavLink> </li>
        <li> <NavLink to="/about" > ABOUT  </NavLink> </li>
        <li> <NavLink to="/product" > PRODUCT </NavLink> </li>
        <li> <NavLink to="/services" > SERVICES </NavLink> </li>
      </ul>
    </div>
  )
}

export default Navbar
