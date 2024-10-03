
// import './App.css'
// import Pannel from './pannel'

// function App() {
  

//   return (
//    <>
//   <Pannel title='About' >
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde nisi quis tempore doloremque nesciunt deserunt eos error amet harum.</p>
//   </Pannel>
//   <Pannel title='Anoything' >
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae unde nisi quis tempore doloremque nesciunt deserunt eos error amet harum.</p>
//   </Pannel>
//    </>
//   )
// }

// export default App


//! the sollution of accordian ??
import './App.css'
import Pannel from './pannel'
import React, { useState } from 'react'

function App() {
 
  const [isActiveIndex,  setIsActiveIndex]=useState(0)

  return (
   <>
   <h1>Lorem ipsum dolor sit.</h1>
   <h2>{}</h2>
<Pannel title="about" isActive = {isActiveIndex === 0} onShow={()=>setIsActiveIndex(0)} >
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum obcaecati at eligendi, laudantium rerum est beatae quod sint quisquam iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut ab perferendis dignissimos rerum, quod aliquam iusto necessitatibus distinctio excepturi sequi veritatis repellat nam, culpa aut, vitae animi nulla voluptate qui! Earum quisquam necessitatibus, dolore deleniti aliquid corporis. Quas, beatae. Repellendus quasi incidunt sapiente sequi, eaque deserunt voluptatum laudantium nisi? </p>

</Pannel  >
<Pannel  title='Lets do' isActive={isActiveIndex==1} onShow= {()=>setIsActiveIndex(1)} >
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet, laborum at rem quos soluta sapiente quia similique facilis quas, ullam perferendis libero autem iusto mollitia alias fugiat aperiam expedita impedit omnis laudantium modi molestias. Quas, nesciunt! Ab officiis, harum rerum fugit dolor soluta temporibus deserunt ullam aut pariatur iusto doloribus vel delectus unde distinctio accusamus voluptatem corporis quod, blanditiis deleniti ut. Esse veritatis quos fuga laudantium nisi fugiat cupiditate! </p>
</Pannel>
   </>
  )
}

export default App
