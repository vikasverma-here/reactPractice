import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homee from "./pages/Home";
import Aboutt from "./pages/About";
import Productt from "./pages/Product";
// import Contactt from "./pages/Contact";
import RootDesign from "./RootDesign";
import Contactlayout from "./layout/contactlayout";
import Contactinfo from "./component/Contactinfo";
import ContactForm from "./component/ContactForm";
import Notfound from "./component/Notfound";
import Jobslayout from "./component/jobslayout";
import Jobs from "./pages/jobs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootDesign />}>
        <Route path="/" element={<Homee />} />
        <Route path="/aboutt" element={<Aboutt />} />
        <Route path="/productt" element={<Productt />} />
        <Route path="/contactt" element={<Contactlayout/>} >
           <Route path="info" element={<Contactinfo/>}  />
           <Route path="form"  element={<ContactForm/>} />
        </Route>
        <Route path="jobs" element={<Jobslayout/>} >
     <Route index element={<Jobs/>} />
        </Route>
        <Route path="*" element={<Notfound/>} />
      </Route>
    )
  );

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
