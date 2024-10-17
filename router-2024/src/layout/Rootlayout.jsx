import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/footer'

function Rootlayout() {
  return (
    <div>
       <Navbar/>
       <div className="nav-link">
       <Outlet/>
       <Footer/>
       </div>
    </div>
  )
}

export default Rootlayout
