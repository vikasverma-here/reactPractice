import React from "react"
import Navigation from "./component/navigation"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Services from "./component/services";
import Contact from "./component/contact";
// import Error from "./component/erro";
import Followus from "./component/foolowus";
import  Fullac from "./component/service-compo/fulllac";
import Clean from "./component/service-compo/clean";
import Hall from "./component/service-compo/hall";
import Goodfood from "./component/service-compo/goodfood";
import Google from "./component/service-compo/google";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <>
        <Home/>
      <Navigation/>
    
      </>
    },
    {
      path:"/about",
      element: <>
      <About/>
      <Navigation/>
      </> 
    },
    {
      path:"/services",
      element:<>
       <Services/>
      <Navigation/>
      </>,
      children:[
        {
          path:"fullac",
          element:<Fullac/>
        }
      ]
     
    },
    {
      
      path:"/contact",
      element:<>
      <Contact/>
      <Navigation/>
      </>,
      children:[
        {
          path:"google",
          element:<Google/>
        }
      ]
    },
    {
      
      path:"/followus",
      element:<>
      <Followus/>
      <Navigation/>
      </>
    },
    {
      
      path:"/:id",
      element:<>
     <Error/>
      </>
    }
    
    // {
      
    //   path:"/:id",
    //   element:<>
    //  <Error/>
    //   </>
    // }

    // import React from 'react'
// import { useParams } from 'react-router-dom'
// function Error() {
//     let  {id} = useParams()
    
//   return (
//     <div>
//       <h1>SOME THING WENT WORNG : 🤣 {id}</h1>
//     </div>
//   )
// }

// export default Error
  ]
)
function App() {

  return (
    <>
   
     <RouterProvider router={router} />
    </>
  )
}

export default App
