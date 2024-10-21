// import React, { useContext } from 'react'
// import { context } from '../App'


// function Child4() {
//     let user = useContext(context)
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <h1>{user.address}</h1>
//     </div>
//   )
// }

// export default Child4

// !building dark and light mode using context api for particular portion 

import React, { useContext } from 'react'
import { themeContext } from '../App'

function Child4() {
    const toggle =()=>{
        if(theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
        }

    const {theme,setTheme} = useContext(themeContext)
  return (
    <div>
   <button onClick={toggle} >Change Theme </button>
    </div>
  )
}

export default Child4

