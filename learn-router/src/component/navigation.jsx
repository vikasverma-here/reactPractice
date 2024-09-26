import React from 'react'
import {  NavLink } from 'react-router-dom'
function Navigation() {
  return (
    <div>
      <ul>
       <li><NavLink  className={({isActive})=> isActive? "link-color" : ""} to="/">HOme</NavLink></li>
       <li> <NavLink className={({isActive})=>isActive? "link-color":""} to="/about">about</NavLink></li>
      
       <li> <NavLink className={({isActive})=>isActive?"link-color":""} to="/services">services</NavLink></li>
       {/* <li><NavLink className={(isActive)=>isActive?"link-color": ""} to="/contact">contact</NavLink></li> */}
       <li> <NavLink className={({isActive})=>isActive?"link-color":""} to="/contact" >contact</NavLink> </li>
       <li> <NavLink className={({isActive})=>isActive?"link-color":""} to="/followus" >followus</NavLink> </li>
       {/* <li> <NavLink className={({isActive})=>isActive?"link-color":""} to="/followus" >followus</NavLink> </li> */}
     
      
       
      
      </ul>
    </div>
  )
}

export default Navigation
