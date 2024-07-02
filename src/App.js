import React from "react";
import Home from "./pages/home"

import "preline/preline";


import { useEffect } from "react"

import Roadmap from "./pages/roadmap/roadmap";
import Feed from "./pages/feed/feed";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';


import Dev from "./pages/dev/dev";
import User from "./(user)/user";







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
      path:"/feed",
      element:<Feed/>
    },
    {
      path:"/dev",
      element:<Dev/>
    },
    {
      path:"/user",
      element:<User/>
    }
  ])
  
  return (
    
      
    <div>
      
      
      <RouterProvider router={router}/>
    

    
    
    </div>
    

    
  );
}

export default App;
