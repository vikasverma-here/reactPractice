import "./App.css";
// import Navbar from './component/Navbar'
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, RouterProvider } from "react-router-dom";
import {createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="Product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
