import React from 'react'
import './navbar.css'
import { NavLink ,useNavigate } from 'react-router-dom'
function Navbar() {

  let navigate = useNavigate()

  return (
    <>
    <div className='navbar'>
      <img src="https://miro.medium.com/v2/resize:fit:572/0*KgNXU3tz-AOj2k4b.png"  alt="" />
      <ul>
       <NavLink to='/' > <li>Home</li></NavLink>
     <NavLink to='/product' >  <li>Product</li></NavLink>
     <NavLink to='/about' >  <li>About </li></NavLink>
     <NavLink to='/contact' > <li>Contact</li></NavLink> 
      </ul>
      <button onClick={()=>navigate('/')} >Get Started</button>
    </div>
    </>
  )
}

export default Navbar
