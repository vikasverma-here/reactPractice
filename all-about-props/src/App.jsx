
// import { Children, useState } from 'react';
import './App.css'
// import Passing from './passing'
// import Card from './Card';
// import Counter from './counter';
import Lifting from './state-lifting';

// function App() {
//  return(
//   <div className="container">
//     <Passing  name="suneel" standard="8th" disc="kuch to karna hai jivan me 0" />
//   </div>
//  )

 
// }


// !!!!!!!! ANOTHER WAY DISTRUCTURE THE PROPS ---------->

// function App() {
//   return (
//     <div className="container">
//     <Card name="vikas " >
// <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, eos?</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus rerum dignissimos voluptas omnis quod alias minus minima, consequatur aliquam deserunt.</p>
// <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque vel veniam, voluptate architecto vero iusto voluptatibus quia ratione ipsum.</h3>
//     </Card>
//     </div>
//   );
// }


// !!!! passing function as a prop to chld 

// function App() {
//   let [count ,setcount] = useState("0")
//   function handlechange (){
//     setcount(count++)
//   }
//   return (
//     <div className="container">
//   <Counter  text="click me " changer={handlechange}/>
//   <h1>{count}</h1>
  
//   <Counter/>
//     </div>
    
//   );
// }

// !! STATE LIFTING OR PASSNING PROPS CHILD TO PARENT ----->
import React, { useState } from 'react';

function App() {
  let [name, setfift] = useState(''); // useState needs to be imported from React
  
  return (
    <>
  
    {/* // Passing 'name' and 'setfift' correctly */}
    <Lifting val={name} valchange={setfift} /> 
    <p>parent : {name}</p>
    </>
  );
}
export default App