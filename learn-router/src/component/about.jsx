import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate()
  function handlechange(){
    
    navigate("/")
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handlechange} >Move To Home </button>
    </div>
  )
}

export default About;
