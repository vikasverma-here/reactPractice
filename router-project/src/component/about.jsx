import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
    function handlechange(){
       
        navigate("/")
    }
  return (
    <div>
      <h1>All about company</h1>
       <button onClick={handlechange} > <h1>GO BACK TO HOME</h1> </button>
    </div>
  )
}

export default About