import React from 'react'
import { useNavigate } from 'react-router-dom'
function Notfound() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>404 ! PAGE NOT FOUND 😭</h1>
      <button onClick={()=> navigate('/')}> Go To Home  </button>
    </div>
  )
}

export default Notfound
