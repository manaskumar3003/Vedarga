import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Roadmap from '../pages/roadmap/roadmap';
import Feed from '../pages/feed/feed';
import Home from '../pages/home';
import Dev from '../pages/dev/dev';
import User from '../(user)/user';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/roadmap',
    element: <Roadmap/>,
  },
  {
    path: '/feed',
    element: <Feed/>,
  },
  {
    path: '/dev',
    element: <Dev />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/hell',
    element: <div>hii</div>,
  },
]);

export const RoutesApp = () => {
  return <RouterProvider router={router} />;
};
