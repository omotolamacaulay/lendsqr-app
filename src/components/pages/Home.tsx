import React, { useState } from "react"
import Sidenav from "../layout/Sidenav"
import Navbar from "../layout/Navbar"
import '../styles/navbar.scss'
import '../styles/home.scss'
import { Turn as Hamburger } from 'hamburger-react'
import { UserProvider } from "../UserProvider"

const Home = ({ children }: { children: React.ReactElement }) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <UserProvider>
            <div className={!collapsed ? '' : "container"} style={{ padding: 16 }}>
                <Navbar />
                <div className="hamburger-toggle">
                    <Hamburger size={20} toggled={collapsed} toggle={setCollapsed} />
                </div>
                <div>
                    {children}
                </div>
                {collapsed && <Sidenav name='sidebar' />}
            </div>
        </UserProvider>
    )
}

export default Home;