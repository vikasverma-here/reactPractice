import React from 'react'
import { useParams } from 'react-router-dom'
function Error() {
    let  {id} = useParams()
    
  return (
    <div>
      <h1>SOME THING WENT WORNG : 🤣 {id}</h1>
    </div>
  )
}

export default Error
