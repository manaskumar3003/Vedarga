import React from "react";
import Home from "./pages/home"

import "preline/preline";

import { useEffect } from "react"

import Roadmap from "./pages/roadmap/roadmap";
import Feed from "./pages/feed/feed";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';


import Dev from "./pages/dev/dev";
import User from "./(user)/user";
import { RoutesApp } from './routing/routes';







function App() {
  return (
    
      
    <div>
      
      
      <RoutesApp/>
    

    
    
    </div>
    

    
  );
}

export default App;
