import React from 'react'
import Header from '../components/Header'
import AppSidebar from '../components/AppSidebar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8fa]">
      <Header />
      <div className="flex flex-1">
        <AppSidebar />
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout;