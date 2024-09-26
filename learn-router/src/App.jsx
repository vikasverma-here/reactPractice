import React from "react"
import Navigation from "./component/navigation"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Services from "./component/services";
import Contact from "./component/contact";
import Error from "./component/erro";
import Followus from "./component/foolowus";

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
     
      </>
    },
    {
      
      path:"/contact",
      element:<>
      <Contact/>
      <Navigation/>
      </>
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
    ,
    {
      
      path:"/:id",
      element:<>
     <Error/>
      </>
    }
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
