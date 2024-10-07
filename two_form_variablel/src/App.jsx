
import './App.css'
import {useState} from 'react'
function App() {
 const [first, setfirst] = useState("Tylor ")
 const [increment, setincrement] = useState(20)
function handleChange(e){
  setfirst(e.target.value)
}
function handleClick (){
setincrement(increment+1)
}
  return (
  <>
  <input type="text"  onChange={handleChange}  value={first}/>
  <br/>
  <br/>
  <br/>
  <button onClick={handleClick} >Increment age </button>
  <h1> Hello ; {first} your age is {increment}</h1>
  </>
  )
}

export default App
