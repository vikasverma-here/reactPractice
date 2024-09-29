
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './component/Home';
import Product from './component/product';
import Services from './component/services';
import About from './component/about';
import Navbar from './component/navbar';
import Courses from './component/courses';
import Teachers from './component/teachers';


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar/> 
    <Home/>
    </> 
  },
  {
    path: "/product",
    element:  <> 
    <Navbar/>
    <Product/>
    </>
  },
  {
    path: "/services",
    element: <> 
    <Navbar/>
    <Services/>
    </>
   
  },
  {
    path: "/about",
    element: <> 
      <Navbar/>
    <About/>
    </> 
  },
]);

function App() {
 

  return (
    <>
   
   <RouterProvider router={router} />
    </>
  )
}

export default App
