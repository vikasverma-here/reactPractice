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
import Contactt from "./pages/Contact";
import RootDesign from "./RootDesign";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootDesign />}>
        <Route path="/" element={<Homee />} />
        <Route path="/aboutt" element={<Aboutt />} />
        <Route path="/productt" element={<Productt />} />
        <Route path="/contactt" element={<Contactt />} />
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
