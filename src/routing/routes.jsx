import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout';
import Roadmap from '../pages/roadmap/roadmap';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Layout />}/>
          <Route path="/roadmap" element={<Roadmap/>}/>
            
            
          
        </Routes>
      </BrowserRouter>
  )
}
