
// import Addtodo from './addtodo'
import './App.css'
import { useState } from 'react';




function App() {
  // const [todos, setTodos] = useState(initialTodos);


function handlechange(e){
  setText(e.target.value)
}
function createInitialTodos (){
  const initialtodos = [];
}
 function handleClick(){
  setText('')
 }

  const [ todos , setTodos] = useState(createInitialTodos)
  const [text, setText] = useState('');
  return (
 
      <>
      
     <input type="text"  value={text} onChange={handlechange} />
      {/* <h1>{todos}</h1> */}
      <button onClick={handleClick}  >Add</button>
      <h1>{text}</h1>
      </>
  
  )
}

export default App
