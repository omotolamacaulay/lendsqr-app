import React from "react"
import Sidenav from "../layout/Sidenav"
import Navbar from "../layout/Navbar"
import '../styles/navbar.scss'
import '../styles/home.scss'

const Home = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="container">
            <Navbar />
            <div>
                {children}
            </div>
            <Sidenav />
        </div>
    )
}

export default Home;