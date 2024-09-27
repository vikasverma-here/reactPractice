import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <Outlet/>
      <h1>contact</h1>
      <h2><NavLink>google</NavLink></h2>
    </div>
  )
}

export default Contact;
