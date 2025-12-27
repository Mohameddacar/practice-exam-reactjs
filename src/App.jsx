import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Error from './pages/Error.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Route>
  )
);



const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App