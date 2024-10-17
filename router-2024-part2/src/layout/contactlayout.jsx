import React from 'react'
import Contactt from '../pages/Contact'
import { Outlet } from 'react-router-dom'

function Contactlayout() {
  return (
    <div>
      <Contactt/>
      <Outlet/>
    </div>
  )
}

export default Contactlayout
