import {useState} from 'react';

import './App.css'

function App() {
const [count , setCount] = useState(0)
 
function handleClick (){
  setCount(count+3)
  console.log(count)
}
function handleClickDec(){
  if(count>0){
    setCount(count-1)
  }

}
function reset (){
setCount(0)
}

  return (
   <>
   
   <h1> VAVLUE : {count} </h1>
   <button onClick={handleClick} >Increase </button>
   <button onClick={handleClickDec} >  Dicrease  </button>
   <br/>
   <br/>
   <button onClick={reset} > Reset</button>
   </>
  )
}

export default App
