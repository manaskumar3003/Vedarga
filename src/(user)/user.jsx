import React, { useState } from 'react';

import Sidebar from './usercomp/sidebar';
import Dashboard from './pages/dashboard/dashboard'
import Helpdesk from './pages/helpdesk/helpdesk'
import { BrowserRouer } from 'react-router-dom'
import Todo from './pages/todo/todo';







const User = () => {
  const [page, setPage] = useState('Dashboard');
  return (
    <div>
      <div class="grid grid-cols-12 ">
        <div class="h-screen fixed w-16 bg-gray-100"><Sidebar setPage={setPage} /></div>

        <div class=" col-span-10 h-screen w-full ">
          {page === 'Dashboard' && <Dashboard />}
          {page === 'helpdesk' && <Helpdesk />}
          {page === 'task' && <Todo />}

    
        </div>
        <div class=" col-span-2 bg-red-200 h-screen w-full "></div>
        
        
      </div>
      
    </div>
  )
}

export default User;

