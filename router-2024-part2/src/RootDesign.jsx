import React from 'react'
import Navigation from './component/Navigation'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
function RootDesign() {
  return (
    <div>
       <Navigation/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default RootDesign
