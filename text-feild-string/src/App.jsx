
import './App.css'
import {useState} from 'react'
function App() {
const [ value , setValue] = useState("hellow")
function handleChange(e){
 setValue(e.target.value)
}
  return (
  <>
  <input value= {value} type="text" onChange={handleChange} />
  <h2>You Typed : {value}</h2>
  <button  onClick={()=>{setValue('hellow')}} >Reset</button>
  </>
  )
}

export default App
