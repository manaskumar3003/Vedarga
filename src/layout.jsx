import React from 'react'

import { Outlet, Link } from 'react-router-dom'
export default function Layout() {
    return (
        <>

            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/Roadmap">About</Link>
            <Outlet />
        </>
    )
}
