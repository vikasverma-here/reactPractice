import React from 'react'
import './container.css'

function Container(props) {
    const {children}=props
  return (
    <div className='container'>
      <h1>{children}</h1>
    </div>
  )
}

export default Container
