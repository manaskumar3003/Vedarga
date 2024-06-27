import React from "react";
import Home from "./pages/home"
import Navbar from "./component/home/navbar";
import { Body } from "./component/home/body";
import "preline/preline";

import { Footercontact } from "./component/home/footercontact";
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roadmap from "./pages/roadmap/roadmap";
import Feed from "./pages/feed/feed";
import Layout from './layout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { IStaticMethods } from "preline/preline";







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

    },

    {
      path:"feed",
      element:<Feed/>
    }
  ])
  
  return (
    
      
    <div>
      
      
      <RouterProvider router={router}/>
    

    
    
    </div>
    

    
  );
}

export default App;
