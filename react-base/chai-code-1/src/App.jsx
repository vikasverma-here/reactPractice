
import './App.css'
import {useState} from 'react'
function App() {
  let [val , setVal ] = useState(0)
let handleClickadd =()=>{
  setVal(val+1)
  console.log(val)
}
let handleClickrem =()=>{

  if(val>0){
   setVal(val-1)
  }
  console.log(val)
}
  return (
  <>
  <h1>VALUE : {val}</h1>
 <button onClick={handleClickadd}  > click me  </button>
 <button  onClick={handleClickrem} > click me  </button>
  </>
  )
}

export default App
