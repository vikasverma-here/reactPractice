import React from 'react'

function Counter(prop) {
  return (
    <div>
        
        <h1>{prop.count}</h1>
      <button onClick={prop.changer} > 
        {prop.text}
         </button>
    </div>
  )
}

export default Counter
