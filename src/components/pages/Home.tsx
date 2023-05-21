import React from "react"
import Sidenav from "../layout/Sidenav"
import Navbar from "../layout/Navbar"
import '../styles/navbar.scss'
import '../styles/home.scss'
import { UserProvider } from "../UserProvider"

const Home = ({ children }: { children: React.ReactElement }) => {
    return (
        <UserProvider>
            <div className="container">
                <Navbar />
                <div>
                    {children}
                </div>
                <Sidenav />
            </div>
        </UserProvider>
    )
}

export default Home;