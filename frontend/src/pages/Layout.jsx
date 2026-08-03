import React from 'react'
import { Outlet } from 'react-router-dom'
import './styles/layout.css'
import SideBar from '../layouts/SideBar'
import Navbar from '../layouts/Navbar'

const Layout = React.memo(() => {
    return (
        <div className='leyoutMain'>
            <Navbar />
            <div className='Outlet'>
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
})

Layout.displayName = 'layout'
export default Layout
