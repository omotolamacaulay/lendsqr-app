import React from "react";
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>
                lendsqr
            </h1>
            <div className="navbar-body">
                <div className="navbar-body-left">
                    <div className="input-group">
                        <input type="text" name="" id="" className="search-input" placeholder="Search for anything" />
                        <button type="button">333</button>
                    </div>
                </div>
                <div className="navbar-body-right">
                    <Link to='/login' className="link">Docs</Link>
                    <p>Adedeji</p>
                </div>
            </div>
        </div>
    )
}


export default Navbar