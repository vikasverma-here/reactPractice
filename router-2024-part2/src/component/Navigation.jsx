import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Navigation() {
const navigate = useNavigate()
  return (
    <div>
      <div className="navbar">
        <h1>Router</h1>
        <ul>
            <NavLink to="/" >Home</NavLink>
            <NavLink to = 'aboutt'>About</NavLink>
            <NavLink to='contactt' >Contact</NavLink>
            <NavLink to='productt' >Product</NavLink>
            <NavLink to='jobs ' >jobs</NavLink>
        </ul>
        <button onClick={()=>navigate('/' ,{replace:true})} >Get Started</button>
      </div>
    </div>
  )
}

export default Navigation
