import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='navbar'>
      <img src="https://miro.medium.com/v2/resize:fit:572/0*KgNXU3tz-AOj2k4b.png"  alt="" />
      <ul>
       <Link to='/' > <li>Home</li></Link>
     <Link to='/product' >  <li>Product</li></Link>
     <Link to='/about' >  <li>About </li></Link>
     <Link to='/contact' > <li>Contact</li></Link> 
      </ul>
      <button>Get Started</button>
    </div>
    </>
  )
}

export default Navbar
