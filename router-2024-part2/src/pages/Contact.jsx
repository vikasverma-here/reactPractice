import React from 'react'
import { useNavigate } from 'react-router-dom'
import Contactinfo from '../component/Contactinfo'
function Contactt() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to Contact page</h1>
      <button onClick={()=> navigate('info') } >Go to Contact-Info </button>
      <button onClick={()=>navigate('form')} >Go to Contact-Form </button>
    </div>
  )
}

export default Contactt
