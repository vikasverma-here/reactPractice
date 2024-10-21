
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const btnref = useRef(50)
const [add , setadd ]=useState(50)


const additon = ()=>{
  setadd(add+1)
  btnref.current=btnref.current-1;
  console.log(btnref)
  if(btnref.current==0){
   btnref.current=btnref.current+1;
  }
}

useEffect(()=>{
  console.log("mai to nachunga ")
  
})

const refrence = useRef()
const changecolor = ()=>{
  refrence.current.style.backgroundColor = 'red';
}
  return (
  <>
  <h1>{add}</h1>
  <h1>{btnref.current}</h1>
  <button  onClick={additon} >Increment</button>
  <button takeref ={refrence} >color</button>
  <button onClick={changecolor} >change btn color</button>
  </>
  )
}

export default App
