import React from "react";
import Home from "./pages/home"
import Navbar from "./component/home/navbar";
import { Body } from "./component/home/body";
import "preline/preline";

import { Footercontact } from "./component/home/footercontact";
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roadmap from "./pages/roadmap/roadmap";
import Layout from './layout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';






function App() {
  useEffect(() => {
    document.title = "Vedarga"
  }, [])
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>

    },
    {
      path:"/roadmap",
      element:<Roadmap/>
    }
  ])
  
  return (
    
      
    <div>
      
      <Navbar />
      <RouterProvider router={router}/>
    

    
    
    </div>
    

    
  );
}

export default App;
