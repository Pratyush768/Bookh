import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col h-screen bg-white'>
            <Navbar/>
            <div className='flex h-full'>
                <Sidebar />
                {/* 1. Set the premium background for the main content area and added more padding */}
                <main className='flex-1 p-6 md:p-8 lg:p-10 h-full overflow-y-auto bg-[#FFFBF2]'>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}

export default Layout