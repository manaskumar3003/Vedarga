import React, { useState } from 'react';

import Sidebar from './usercomp/sidebar';
import Dashboard from './usercomp/dashboard'
import Helpdesk from './usercomp/helpdesk'
import Layout from './usercomp/layout';








const User = () => {
  const [page, setPage] = useState('Dashboard');
  return (
    <div>
      <Layout>
        <div className = "grid grid-cols-12 ">
        <div className ="h-screen fixed w-16  bg-gray-100"><Sidebar setPage={setPage}/></div>
        
        <div className =" col-span-10 w-full h-screen w-full ">
        {page === 'Dashboard' && <Dashboard />}
        {page === 'helpdesk' && <Helpdesk />}
          
        
          </div>
          <div>hi</div>
        </div>
        </Layout>
    </div>
  )
}

export default User;

