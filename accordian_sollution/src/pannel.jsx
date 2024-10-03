// import React, { useState } from 'react'

// function Pannel({title,children}) {
//     const [isActive,setisActive]=useState(false)
//   return (
//     <div>
//         <h1>{title}</h1>
//         {
//             isActive?(
//                 <p>{children}</p>
//             ):(
//                 <button onClick={()=> setisActive(true)}>
//                     Show me
//                 </button>
//             )
//         }
//     </div>
//   )
// }

// export default Pannel


// !!! the sollution of accordian 



function Pannel({title,children,onShow,isActive}) {
   
  return (
    <div>
      
      {
        isActive?(
            <p>{children}</p>
        ):(
            <button onClick={onShow} >
                show
            </button>
        )
      }
    </div>
  )
}

export default Pannel