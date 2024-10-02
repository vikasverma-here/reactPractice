import React from 'react'

// function Passing({name,standard, disc}) {
    
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{standard}</h1>
//       <h1>{disc}</h1>
     
      
//     </div>
//   )
// }

// !!! ANOTHER WAY TO DISTRUCURE THE PROPS -----> 


// function Passing(props) {
//     const { name, standard, disc } = props;
    
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h1>{standard}</h1>
//         <h1>{disc}</h1>
       
//       </div>
//     );
//   }

// !! PASS COMPONET AS CHILDREN --->

function Passing(props) {
    return(
        <>
        <Passing>
            <h1>hellow </h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium.</h4>
            <button>lets see </button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi ad, voluptas quaerat autem id. Fugiat nisi accusantium odit maiores, iusto aspernatur animi eum mollitia unde sed nulla laborum ut.</p>
        </Passing>
        </>
    )
  }

export default Passing
