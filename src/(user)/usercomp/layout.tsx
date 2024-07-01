import React from 'react';
import { Toaster } from "sonner"

const Layout =({children}:{children:any}) =>{
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster /> // 
      </body>
    </html>
  )
}

export default Layout;