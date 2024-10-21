// import React, { createContext, useState } from 'react'
// import Child1 from "./component/Child1"


// const context = createContext()

// function App() {
//   const [user , serUser] = useState({name:'vikas verma ',address:'bhopal'})
//   return (
// <context.Provider value={user }>

// <Child1/>
// </context.Provider>
     
   
//   )
// }

// export default App
// export{context}


import React, { createContext, useState } from 'react'
import Child1 from './component/Child1'

const themeContext = createContext()

function App() {
  const [theme , setTheme ] = useState('light')
  return (
    <themeContext.Provider value={{theme , setTheme}}>
    <div className="container" style={{backgroundColor:theme==='light'? 'red' :'green'}} >
    <Child1/>
    </div>
   
    </themeContext.Provider>
  )
}

export default App
export {themeContext}

