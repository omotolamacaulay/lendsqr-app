import React from "react";
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'
import { SearchIcon, Logo, Bell, NavProfile, NavArrowDown } from "../../assets";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>
                <Link to='/'>
                    <img src={Logo()} alt="" />lendsqr
                </Link>
            </h1>
            <div className="navbar-body">
                <div className="navbar-body-left">
                    <div className="input-group">
                        <input type="text" name="" id="" className="search-input" placeholder="Search for anything" />
                        <button type="button"><img src={SearchIcon()} alt="" /></button>
                    </div>
                </div>
                <div className="navbar-body-right">
                    <Link to='/login' className="link">Docs</Link>
                    <img src={Bell()} alt="" />
                    <div className="navbar-body-right-profile">
                        <img src={NavProfile()} alt="" />
                        <p>Adedeji <img src={NavArrowDown()} alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar