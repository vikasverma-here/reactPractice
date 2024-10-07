
import './App.css'
import {useState} from 'react'

function App() {
const [obj, setobj] = useState({
  firstName:'vikas ',
  lastName:'verma',
  email: 'vikasverma99788.gmail.com'
})



  return (
   <>
   <label>
    FirstName : 
    <input type="text"
    value={obj.firstName} 
   
    onChange={(e)=>{
     
      setobj(
        {
          ...obj,firstName:e.target.value
        }
      )
    }}/>
   </label> 
   
   <label>
    lastName : 
    <input type="text"
    value={obj.lastName} 
    
    onChange={(e)=>{

      setobj({
        ...obj,lastName: e.target.value
      })
    }}/>
   </label>

   <label>
    Email : 
    <input type="text"
    value={obj.email} 
    onChange={(e)=>{
      setobj(
        {...obj, email:e.target.value}
      )
    }}/>
   </label> 
 
   <p>{obj.email}</p>
   <p>{obj.firstName}</p>
   <p>{obj.lastName}</p>
   </>
  )
}

export default App
