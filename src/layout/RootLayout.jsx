import React from 'react'
import Navber from './Navber'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navber />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout