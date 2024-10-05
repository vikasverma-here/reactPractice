
import './App.css'
import {useState} from "react"
function App() {
const [liked , setliked] = useState(true)
function handleChange(e){
setliked(e.target.checked)

}

  return (
   <>
   <h1> <  input type="checkbox" cheked=  {liked}  onChange={handleChange} /> : you liked it  </h1>
   <h3>YOU :  {liked ? "liked 👌 " : 'did not like 😥'} this </h3>
   </>
  )
}

export default App
